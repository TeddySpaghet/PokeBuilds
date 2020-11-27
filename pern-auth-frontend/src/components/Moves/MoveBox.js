import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

const MoveBox = ({ id, moveId, pokemon, setPokemon, moves, setMoves }) => {
  const chooseMove = (move) => {
    setMoves({ ...moves, [`move${moveId}`]: move })
  }

  return (
    <div>
      {pokemon ? (
        <Autocomplete
          onChange={(event, value) => chooseMove(value.move.name)}
          // id='combo-box-demo'
          options={pokemon.moves}
          getOptionLabel={(option) => option.move.name}
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
