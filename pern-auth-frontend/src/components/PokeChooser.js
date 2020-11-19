/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Pokedex from 'pokedex-promise-v2'

export default function PokeChooser() {
  const [pokemon, setPokemon] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  // *** SET THE CHOSEN POKEMON HERE
  const getPokemon = () => {
    const P = new Pokedex()
    P.getPokemonsList().then((response) => setPokemon(response.results))
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div>
      {pokemon.length ? (
        <Autocomplete
          // TODO: CHANGE ONCHANGE TO SET SELECTED POKEMON STATE LOGIC
          onChange={(event, value) =>
            setSelectedPokemon([pokemon.find((x) => value === x.name)])
          }
          id='combo-box-demo'
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
