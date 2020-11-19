import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Pokedex from 'pokedex-promise-v2'
import PokeChooser from './PokeChooser'
import MoveContainer from './MoveContainer'

// for a single pokemon

const PokeContainer = ({
  // selectedPokemonData, setSelectedPokemonData
  pokemon,
  setPokemon,
  selectedPokemon,
  setSelectedPokemon,
}) => {
  // TODO PUT THIS IN ITS SEPARATE COMPONENT
  const [selectedPokemonData, setSelectedPokemonData] = useState(null)

  const getSelectedPokemonData = () => {
    const P = new Pokedex()
    if (selectedPokemon) {
      P.getPokemonByName(selectedPokemon[0].name).then((response) =>
        setSelectedPokemonData(response)
      )
    }
    console.log(selectedPokemonData)
  }

  useEffect(() => {
    getSelectedPokemonData()
  }, [selectedPokemon])

  return (
    <div>
      <h1>{selectedPokemon ? selectedPokemon[0].name : 'missingno'}</h1>
      {/* <img src={image} alt='' /> */}
      {/* <Button>{single page link}</Button> */}
      <PokeChooser
        pokemon={pokemon}
        selectedPokemon={selectedPokemon}
        setPokemon={setPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      <MoveContainer
        selectedPokemonData={selectedPokemonData}
        selectedPokemon={selectedPokemon}
      />
      {/* <StatContainer stats={selectedPokemonData.stats} /> */}
    </div>
  )
}

export default PokeContainer
