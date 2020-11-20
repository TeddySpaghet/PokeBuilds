import React, { useState, useEffect } from 'react'
import PokeChooser from './PokeChooser'
import MoveContainer from './MoveContainer'
import StatContainer from './StatContainer'
import PokeData from './PokeData'
import missingno from '../img/missigno.png'

const PokeContainer = ({
  pokemon,
  setPokemon,
  pokeArray,
  setPokeArray,
  id,
  //should this be here?
  moveId,
}) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [selectedPokemonData, setSelectedPokemonData] = useState()

  // TODO POKEARRAY STUFF

  const updatePokeArray = () => {
    setPokeArray({
      ...pokeArray,
      [id]: {
        name: selectedPokemon[0].name,
        // movesObj,
      },
    })
  }

  useEffect(() => {
    if (selectedPokemon) {
      console.log(pokeArray)
    }
  }, [pokeArray])

  useEffect(() => {
    if (selectedPokemon) {
      updatePokeArray()
    }
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
      <MoveContainer
        selectedPokemon={selectedPokemon}
        selectedPokemonData={selectedPokemonData}
        pokeArray={pokeArray}
        setPokeArray={setPokeArray}
        id={id}
      />
      <StatContainer selectedPokemonData={selectedPokemonData} />
    </div>
  )
}

export default PokeContainer
