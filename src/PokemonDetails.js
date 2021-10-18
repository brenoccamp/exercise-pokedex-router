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
    return filteredPokemon
  }
  render() {
    const { id } = this.props.match.params;
    const { name, type, averageWeight: { value, measurementUnit }, summary, foundAt } = this.filterPokemonById(Number(id));
    return (
      <div>
        <p>Nome: {name}</p>
        <p>Tipo: {type}</p>
        <p>Peso: {value} {measurementUnit}</p>
        <p>Resumo: {summary}</p>
        <p>Pode ser encontrado em:</p>
        {foundAt.map((foundOn) => (
            <div className="map-location" key={foundOn.location}>
              <p>{foundOn.location}</p>
              <img src={foundOn.map} alt="map location" />
            </div>
        ))}
      </div>
    )
  }
}

export default PokemonDetails;