/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

export default function PokeChooser({
  pokemon,
  selectedPokemon,
  setSelectedPokemon,
}) {
  return (
    <div>
      {pokemon.length ? (
        <Autocomplete
          // TODO: CHANGE ONCHANGE TO SET SELECTED POKEMON STATE LOGIC
          onChange={(event, value) =>
            setSelectedPokemon([pokemon.find((x) => value === x.name)])
          }
          // id='combo-box-demo'
          options={pokemon.map((x) => x.name)}
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
