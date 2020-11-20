import React, { useState, useEffect } from 'react'
import PokeChooser from './PokeChooser'
import MoveContainer from './MoveContainer'
import StatContainer from './StatContainer'
import PokeData from './PokeData'
import missingno from '../img/missigno.png'

const PokeContainer = ({ pokemon, setPokemon, pokeArray, setPokeArray }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [selectedPokemonData, setSelectedPokemonData] = useState()

  // TODO FIGURE OUT UPDATE POKEARRAY STUFF

  // const updatePokeArray = (selectedPokemon) => {
  //   setPokeArray((pokeArray) => [...pokeArray, selectedPokemon])
  //   console.log(pokeArray)
  // }

  // useEffect(() => {
  //   if (selectedPokemon) {
  //     updatePokeArray(selectedPokemon)
  //   }
  // }, [selectedPokemon])

  useEffect(() => {
    // updatePokeArray(selectedPokemon)
    // console.log(`we got a selected pokemon: ${selectedPokemon}`)
    // console.log(`we got selected pokemon data: ${selectedPokemonData}`)
  }, [selectedPokemonData])

  return (
    <div>
      <h1>{selectedPokemonData ? selectedPokemonData.name : 'missingno'}</h1>
      <img
        src={
          selectedPokemonData
            ? selectedPokemonData.sprites.front_default
            : missingno
        }
        alt='missingno'
      />
      {/* <Button>{single page link}</Button> */}
      <PokeChooser
        pokemon={pokemon}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
        pokeArray={pokeArray}
        setPokeArray={setPokeArray}
      />
      <PokeData
        selectedPokemon={selectedPokemon}
        selectedPokemonData={selectedPokemonData}
        setSelectedPokemonData={setSelectedPokemonData}
      />
      <MoveContainer selectedPokemonData={selectedPokemonData} />
      <StatContainer selectedPokemonData={selectedPokemonData} />
    </div>
  )
}

export default PokeContainer
