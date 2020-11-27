/* eslint-disable no-use-before-define */
import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { PokedexContext } from '../Contexts/PokedexContext'
const axios = require('axios')

export default function PokeChooser({ id, pokemon, setPokemon }) {
  const [pokedex] = useContext(PokedexContext)

  const getPokemon = (x) => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + x)
      .then((res) => setPokemon(res.data))
  }

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
