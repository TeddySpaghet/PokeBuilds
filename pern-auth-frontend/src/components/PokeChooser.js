/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

export default function PokeChooser({
  pokemon,
  selectedPokemon,
  setSelectedPokemon,
  pokeArray,
  setPokeArray,
}) {
  // TODO ***TRYING TO FIGURE OUT HOW TO UPDATE POKE ARRAY... MOVED UP TO POKECONTAINER
  const updatePokeArray = (selectedPokemon) => {
    setPokeArray((pokeArray) => [...pokeArray, selectedPokemon])
    console.log(pokeArray)
  }

  useEffect(() => {
    if (selectedPokemon) {
      updatePokeArray(selectedPokemon)
    }
  }, [selectedPokemon])

  return (
    <div>
      {pokemon.length ? (
        <Autocomplete
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
