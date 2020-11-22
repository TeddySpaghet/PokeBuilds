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
}) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [selectedPokemonData, setSelectedPokemonData] = useState()

  // TODO POKEARRAY STUFF

  const updatePokeArray = () => {
    setPokeArray({
      ...pokeArray,
      [id]: {
        name: selectedPokemon[0].name,
        moves: null,
      },
    })
  }

  useEffect(() => {
    if (selectedPokemon) {
      updatePokeArray()
      console.log(pokeArray)
    }
  }, [selectedPokemonData])

  return (
    <div>
      <h1></h1>
      <img src={missingno} alt='missingno' />
      {/* <Button>{single page link}</Button> */}
      <PokeChooser id={id} />
      <PokeData />
      <MoveContainer id={id} />
      {/* <StatContainer selectedPokemonData={selectedPokemonData} /> */}
    </div>
  )
}

export default PokeContainer
