import React from 'react';
import pokemons from './data';
import "./pokemonDetails.css"

class PokemonDetails extends React.Component {
  constructor() {
    super();
    this.filterPokemonById = this.filterPokemonById.bind(this);
  }

  filterPokemonById(id) {
    const filteredPokemon = pokemons.find((pokemon) => pokemon.id === id);
    const newObj = {
      filteredPokemon
    }
    return newObj;
  }
  render() {
    const { favorited, favoritedFunc } = this.props;
    const { id } = this.props.match.params;
    const { filteredPokemon: { name, type, averageWeight: { value, measurementUnit }, summary, foundAt, image }, filteredPokemon } = this.filterPokemonById(Number(id));
    return (
      <div>
        <h3>{name} Details</h3>
        <div className="details-container">
          <div className="more-details">
            <div className="name-type-value">
              <p>Name: {name}</p>
              <p>Type: {type}</p>
              <p>AverageWeight: {value} {measurementUnit}</p>
            </div>
            <img src={image} alt={`${name} sprite`} />
          </div>
        </div>
        <h3>Sumary</h3>
        <p>{summary}</p>
        <h3>Game Locations of {name}</h3>
        {foundAt.map((foundOn) => (
            <div className="map-location" key={foundOn.location}>
              <p>{foundOn.location}</p>
              <img src={foundOn.map} alt="map location" />
            </div>
        ))}
        <br></br>
        <label htmlFor="pokemon-details">
        Favoritar Pokemon
          <input
            id="pokemon-details"
            type="checkbox"
            name="favorited"
            checked={favorited}
            onChange={(event) => favoritedFunc(event, filteredPokemon)}
          />
        </label>
      </div>
    )
  }
}

export default PokemonDetails;