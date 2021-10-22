import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About';
import NotFound from './NotFound';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favorited: false,
      favoritedPokemons: [],
    }
  }

  favoritedFunc = ({ target }, filteredPokemon) => {
    console.log(filteredPokemon)
    // const { favoritedPokemons } = this.state;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // if (favoritedPokemons.contains()) {
    //   favoritedPokemons.filter((favoritePokemon) => favoritePokemon ==)
    // }
    this.setState({
      [name]: value,
      // favoritedPokemons: [...favoritedPokemons],
    })
  }

  render() {
    const { favorited, favoritedPokemons } = this.state;
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/favorite-pokemon">Favorite Pokémons</Link>
          </nav>
          <Switch>
            <Route exact path="/" render={() => <Pokedex pokemons={pokemons} />} />
            <Route path="/pokemon-details/:id" render={(props) => <PokemonDetails {...props} favoritedPokemons={favoritedPokemons} favorited={ favorited } favoritedFunc={this.favoritedFunc} />} />
            <Route path="/about" component={About} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
