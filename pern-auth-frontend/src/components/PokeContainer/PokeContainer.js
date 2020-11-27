import React, { useState, useEffect, useContext } from 'react'
import PokeChooser from './PokeChooser'
import MoveList from '../Moves/MoveList'
import StatContainer from '../Stats/StatContainer'
import missingno from '../../img/missigno.png'
import Pokedex from 'pokedex-promise-v2'

const PokeContainer = ({ id }) => {
  const P = new Pokedex()

  const [pokemon, setPokemon] = useState()
  const [pokemonData, setPokemonData] = useState()

  return (
    <div>
      <h1></h1>
      <img src={missingno} alt='missingno' />
      <PokeChooser id={id} setPokemon={setPokemon} />
      <MoveList id={id} pokemon={pokemon} />
      <StatContainer id={id} pokemon={pokemon} />
    </div>
  )
}

export default PokeContainer
