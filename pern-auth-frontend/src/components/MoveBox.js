import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Pokedex from 'pokedex-promise-v2'

const MoveBox = ({ selectedPokemonData, moveId, movesObj, setMovesObj }) => {
  const updateMoveObj = () => {
    console.log(moveId)
    setMovesObj({
      ...movesObj,
      [moveId]: selectedMove,
    })
  }

  const [selectedMove, setSelectedMove] = useState(null)

  useEffect(() => {
    if (selectedMove) {
      updateMoveObj()
      console.log(movesObj)
    }
  }, [selectedMove])

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
