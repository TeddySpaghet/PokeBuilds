/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Pokedex from 'pokedex-promise-v2'

export default function ComboBox() {
  const [pokemon, setPokemon] = useState([])

  const getPokemon = () => {
    const P = new Pokedex()
    P.getPokemonsList().then((response) =>
      setPokemon(response.results.map((x) => x.name))
    )
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div>
      {pokemon.length ? (
        <Autocomplete
          id='combo-box-demo'
          options={pokemon}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label='Pokemon' variant='outlined' />
          )}
        />
      ) : (
        'loading'
      )}
    </div>
  )
}
