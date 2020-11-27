import React, { useState, useEffect, useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { TeamContext } from '../Contexts/TeamContext'
import { PokemonDataContext } from '../PokeContainer/PokeContainer'
import Pokedex from 'pokedex-promise-v2'

const MoveBox = ({ id, moveId, pokemonData }) => {
  const [team, setTeam] = useContext(TeamContext)

  const chooseMove = (move) => {
    //TODO setPokemon
  }

  return (
    <div>
      <Autocomplete
        onChange={(event, value) => chooseMove(value)}
        // id='combo-box-demo'
        options={
          // TODO configure options so that they match pokemonData.moves
          ['1']
        }
        getOptionLabel={(option) => option.move.name}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label='Move' variant='outlined' />
        )}
      />
      {/* ) : (
        ''
      )} */}
    </div>
  )
}

export default MoveBox
