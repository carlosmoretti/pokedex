import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import PokedexMasterComponent from './components/pokedex/PokedexMasterComponent';
import IndexComponent from './components/index/IndexComponent';

function App() {
  return (
    <Router>
      <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active">Início</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/pokedex/" className="nav-link" activeClassName="active">Pokedex</NavLink>
          </li>
        </ul>
      </div>
    </nav>
        
      <div class="container mt-5">
        <Route exact path="/" exact component={IndexComponent} />
        <Route exact path="/pokedex" component={PokedexMasterComponent} />
      </div>
      </div>
    </Router>
  );
}

export default App;
