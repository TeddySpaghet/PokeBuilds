import React, { useState, useEffect } from 'react'
import MoveBox from './MoveBox'

const MoveContainer = ({
  selectedPokemon,
  selectedPokemonData,
  pokeArray,
  setPokeArray,
  id,
}) => {
  const [movesObj, setMovesObj] = useState({
    move0: null,
    move1: null,
    move2: null,
    move3: null,
  })
  // useEffect(() => {}, [selectedPokemon])

  return (
    <div>
      <MoveBox
        key={'1'}
        moveId={'move0'}
        id={id}
        selectedPokemon={selectedPokemon}
        selectedPokemonData={selectedPokemonData}
        movesObj={movesObj}
        setMovesObj={setMovesObj}
        pokeArray={pokeArray}
        setPokeArray={setPokeArray}
      />
      <MoveBox
        key={'2'}
        moveId={'move1'}
        id={id}
        selectedPokemon={selectedPokemon}
        selectedPokemonData={selectedPokemonData}
        movesObj={movesObj}
        setMovesObj={setMovesObj}
        pokeArray={pokeArray}
        setPokeArray={setPokeArray}
      />
      <MoveBox
        key={'3'}
        moveId={'move2'}
        id={id}
        selectedPokemon={selectedPokemon}
        selectedPokemonData={selectedPokemonData}
        movesObj={movesObj}
        setMovesObj={setMovesObj}
        pokeArray={pokeArray}
        setPokeArray={setPokeArray}
      />
      <MoveBox
        key={'4'}
        moveId={'move3'}
        id={id}
        selectedPokemon={selectedPokemon}
        selectedPokemonData={selectedPokemonData}
        movesObj={movesObj}
        setMovesObj={setMovesObj}
        setPokeArray={setPokeArray}
      />
    </div>
  )
}

export default MoveContainer
