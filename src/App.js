import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/">Pokedex</Link>
          </nav>
          <Switch>
            <Route exact path="/" render={() => <Pokedex pokemons={pokemons} />} />
            <Route path="/pokemon-details/:id" component={PokemonDetails} />
            <Route path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
