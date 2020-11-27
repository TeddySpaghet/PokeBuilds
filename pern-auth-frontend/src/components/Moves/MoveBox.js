import React, { useState, useEffect, useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { PokedexContext } from '../Contexts/PokedexContext'

const MoveBox = ({ id, moveId, pokemon, setPokemon }) => {
  const [pokedex] = useContext(PokedexContext)
  const [moves, setMoves] = useState([])

  const chooseMove = (move) => {
    setMoves(...moves, (move[moveId]: move))
    //TODO setPokemon
  }

  return (
    <div>
      {pokemon ? (
        <Autocomplete
          onChange={(event, value) => chooseMove(value.name)}
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
