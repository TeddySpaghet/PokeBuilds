/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { PokedexContext } from '../Contexts/PokedexContext'
import Pokedex from 'pokedex-promise-v2'

export default function PokeChooser({ id }) {
  const [pokedex] = useContext(PokedexContext)

  return (
    <div>
      {pokedex ? (
        <Autocomplete
          onChange={(event, value) => console.log(value)}
          // TODO onchange => setPokemon 
          // id='combo-box-demo'
          options={pokedex}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label='Pokemon' variant='outlined' />
          )}
        />
      ) : (
        ''
      )}
    </div>
  )
}
