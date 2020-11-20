import React, { useState, useEffect } from 'react'
import MoveBox from './MoveBox'

const MoveContainer = ({
  selectedPokemon,
  selectedPokemonData,
  pokeArray,
  setPokeArray,
  id,
  moveId,
  movesObj,
  setMovesObj,
}) => {
  const [selectedMove, setSelectedMove] = useState(null)


  const updateMoveObj = () => {
    setMovesObj({
      ...movesObj,
      [moveId]: selectedMove,
    })
    console.log(movesObj)
  }

  useEffect(() => {
    if (selectedMove) {
      updateMoveObj()
    }
  }, [selectedMove])

  useEffect(() => {}, [selectedPokemon])
  return (
    <div>
      <MoveBox
        key={1}
        moveId={0}
        selectedPokemonData={selectedPokemonData}
        selectedMove={selectedMove}
        setSelectedMove={setSelectedMove}
      />
      <MoveBox
        key={2}
        moveId={1}
        selectedPokemonData={selectedPokemonData}
        selectedMove={selectedMove}
        setSelectedMove={setSelectedMove}
      />
      <MoveBox
        key={3}
        moveId={2}
        selectedPokemonData={selectedPokemonData}
        selectedMove={selectedMove}
        setSelectedMove={setSelectedMove}
      />
      <MoveBox
        key={4}
        moveId={3}
        selectedPokemonData={selectedPokemonData}
        selectedMove={selectedMove}
        setSelectedMove={setSelectedMove}
      />
    </div>
  )
}

export default MoveContainer
