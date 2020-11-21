import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Pokedex from 'pokedex-promise-v2'

const MoveBox = ({
  selectedPokemon,
  selectedPokemonData,
  moveId,
  movesObj,
  setMovesObj,
  id,
  pokeArray,
  setPokeArray,
}) => {
  const updateMovesObj = () => {
    setMovesObj({
      ...movesObj,
      [moveId]: selectedMove,
    })
  }

  const addMovesObjToPokeArray = () => {
    setPokeArray({
      ...pokeArray,
      [id]: {
        name: selectedPokemon[0].name,
        moves: movesObj,
      },
    })
  }

  const [selectedMove, setSelectedMove] = useState(null)

  useEffect(() => {
    if (selectedMove) {
      updateMovesObj()
      // console.log(pokeArray)
    }
  }, [selectedMove])

  useEffect(() => {
    if (selectedMove && movesObj) {
      addMovesObjToPokeArray()
      // console.log(pokeArray)
    }
  }, [movesObj])

  return (
    <div>
      {selectedPokemonData ? (
        <Autocomplete
          onChange={(event, value) =>
            setSelectedMove(
              selectedPokemonData.moves.find((x) => value === x.move.name).move
                .name
            )
          }
          // id='combo-box-demo'
          options={selectedPokemonData.moves.map((x) => x.move.name)}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label='Move' variant='outlined' />
          )}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default MoveBox
