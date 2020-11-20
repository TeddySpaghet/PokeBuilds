import React, { useState, useEffect } from 'react'
import MoveBox from './MoveBox'

const MoveContainer = ({
  selectedPokemon,
  selectedPokemonData,
  pokeArray,
  setPokeArray,
  id,
  moveId,
}) => {
  const [selectedMove, setSelectedMove] = useState(null)

  const updateMoveArray = () => {
    console.log(selectedPokemon)
    setPokeArray({
      ...pokeArray,
      [id]: {
        name: selectedPokemon[0].name,
        moves: { ...this.moves, [moveId]: selectedMove },
      },
    })
  }

  useEffect(() => {
    if (selectedMove) {
      updateMoveArray()
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
