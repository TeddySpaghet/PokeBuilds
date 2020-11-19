import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Pokedex from 'pokedex-promise-v2'
import PokeChooser from './PokeChooser'
import MoveContainer from './MoveContainer'

// for a single pokemon

const PokeContainer = ({ pokemon, selectedPokemon }) => {




  return (
    <div>
      <h1>{selectedPokemon ? selectedPokemon[0].name : 'missingno'}</h1>
      {/* <img src={image} alt='' /> */}
      {/* <Button>{single page link}</Button> */}
      <PokeChooser pokemon={pokemon} selectedPokemon={selectedPokemon} />
      <MoveContainer moves={selectedPokemonData} />
      {/* <StatContainer stats={selectedPokemonData.stats} /> */}
    </div>
  )
}

export default PokeContainer
