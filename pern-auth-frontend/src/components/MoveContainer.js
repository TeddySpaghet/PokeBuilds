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
    0: null,
    1: null,
    2: null,
    3: null,
  })
  // useEffect(() => {}, [selectedPokemon])

  return (
    <div>
      <MoveBox
        key={'1'}
        moveId={'0'}
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
        moveId={'1'}
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
        moveId={'2'}
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
        moveId={'3'}
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
