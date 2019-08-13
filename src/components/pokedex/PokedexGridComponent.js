import React, { Component } from 'react'
import { arrayExpression } from '@babel/types';
import { resolve } from 'q';

export default class PokedexGridComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pokemons: []
        }
    }

    componentDidMount = () => {
        this.getPokemon();
    }

    render() {
        return (
            <div>
                <div class="row">
                    {this.state.pokemons.map((data) => {
                        return (
                            <div class="col-sm-2 mb-3">
                                <div class="card">
                                    <div class="card-header small">{data.name}</div>
                                    <div class="card-body text-center"><img src={data.img} /> 
                                    <br/>
                                    {data.types.map((x) => {
                                        return(<span class="badge badge-dark mr-1 p-1">{x}</span>)
                                    })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    getPokemon = () => {
        var tmp = [];
        var arReq = [];

        var all = [];
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=964")
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                for(var item of data.results) {
                    tmp.push(item.name);
                }
            })
            .then(() => {
                for(var item of tmp) {
                    var fet = fetch(`https://pokeapi.co/api/v2/pokemon/${item}/`)
                        .then((data) => { return data.json() });

                    arReq.push(fet);
                }
            })
            .then(() => {
                Promise.all(arReq)
                .then((data) => {
                    for(var item of data) {
                        all.push({
                            name: item.name,
                            img: item.sprites.front_default,
                            types: item.types.map((data) => {
                                return data.type.name;
                            })
                        });
                    }

                    return all;
                })
                .then((data) => {
                    this.setState({pokemons: data})
                })
                .then(() => {
                    console.log(this.state.pokemons);
                })
            })
    }
}
