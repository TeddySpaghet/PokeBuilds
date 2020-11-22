/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { TeamContext } from './TeamContext'
import { PokedexContext } from './PokedexContext'
import Pokedex from 'pokedex-promise-v2'

export default function PokeChooser({ id }) {
  const [team, setTeam] = useContext(TeamContext)
  const [pokedex, setPokedex] = useContext(PokedexContext)

  useEffect(() => {
    console.log(pokedex)
    // console.log(team)
  }, [pokedex])

  const selectPokemon = () => {
    setTeam({ ...team, [`pokemon${id}`]: 'test!' })
  }

  return (
    <div>
      {pokedex ? (
        <Autocomplete
          onChange={
            (event, value) => selectPokemon()
            // setSelectedPokemon([pokemon.find((x) => value === x.name)])
          }
          // id='combo-box-demo'
          options={[pokedex].map((x) => x.name)}
          getOptionLabel={(option) => option}
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
