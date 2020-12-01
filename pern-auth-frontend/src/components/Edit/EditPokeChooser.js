/* eslint-disable no-use-before-define */
import React, { useContext, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { PokedexContext } from '../Contexts/PokedexContext'
import { TeamContext } from '../Contexts/TeamContext'
import chalk from 'chalk'

const axios = require('axios')

export default function PokeChooser({ id, pokemon, setPokemon }) {
  const [team, setTeam] = useContext(TeamContext)
  const [pokedex] = useContext(PokedexContext)

  const getPokemon = (x) => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + x)
      .then((res) => setPokemon(res.data))
  }

  // TODO Implement functionality where the preexisting team is filling out the Figure out why this runs as an infinite loop

  const teamToPokedex = () => {
    const pokemonName = team[`pokemon${id}`].name

    const pokemonNameFromTeam = pokedex
      .map((pokemon) => pokemon.name)
      .find((x) => x === pokemonName)

    const defaultPokemonFromPokedex = pokedex.find(
      (x) => x.name === pokemonNameFromTeam
    )

    return defaultPokemonFromPokedex
  }

  const x = teamToPokedex()
  console.log(x)

  return (
    <React.Fragment>
      {x ? (
        <Autocomplete
          onChange={(event, value) => getPokemon(value.name)}
          options={pokedex}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          defaultValue={x}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Pokemon'
              variant='outlined'
              defaultValue={x.name}
            />
          )}
        />
      ) : (
        ''
      )}
    </React.Fragment>
  )
}
