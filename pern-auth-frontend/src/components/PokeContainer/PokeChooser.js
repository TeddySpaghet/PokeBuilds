/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { PokedexContext } from '../Contexts/PokedexContext'
const axios = require('axios')

export default function PokeChooser({ id, setPokemon }) {
  const [pokedex] = useContext(PokedexContext)

  const getPokemon = (x) => {
    console.log(x)
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + x)
      .then((res) => setPokemon(res.data))
  }

  return (
    <div>
      {pokedex ? (
        <Autocomplete
          onChange={(event, value) => getPokemon(value.name)}
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
