import React, { Component } from 'react'
import PokedexGridComponent from './PokedexGridComponent';

export default class PokedexMasterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pageTitle: "Bem vindo ao Pokedex"
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.pageTitle}</h1>
                <hr />
                <PokedexGridComponent itensPorPagina="10"/>
            </div>
        )
    }
}
