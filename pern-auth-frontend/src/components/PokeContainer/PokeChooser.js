/* eslint-disable no-use-before-define */
import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { PokedexContext } from '../Contexts/PokedexContext'
import { TeamContext } from '../Contexts/TeamContext'
import { useEffect } from 'react'

const axios = require('axios')

export default function PokeChooser({ id, pokemon, setPokemon }) {
  const [team, setTeam] = useContext(TeamContext)
  // console.log(team)
  const [pokedex] = useContext(PokedexContext)

  const getPokemon = (x) => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + x)
      .then((res) => setPokemon(res.data))
  }

  // useEffect(() => {}, [team])

  // TODO Implement functionality where the preexisting team is filling out the Figure out why this runs as an infinite loop
  // console.log(team)

  const pokemonName = team[`pokemon${id}`].name

  const pokemonNameFromTeam = pokedex
    .map((pokemon) => pokemon.name)
    .find((x) => x === pokemonName)

  console.log(pokemonNameFromTeam)

  const defaultPokemonFromPokedex = pokedex.find(
    (x) => x.name === pokemonNameFromTeam
  )

  console.log(defaultPokemonFromPokedex)

  return (
    <React.Fragment>
      {pokedex[0] ? (
        <Autocomplete
          onChange={(event, value) => getPokemon(value.name)}
          options={pokedex}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          defaultValue={defaultPokemonFromPokedex}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Pokemon'
              variant='outlined'
              defaultValue={
                defaultPokemonFromPokedex
                  ? defaultPokemonFromPokedex.name
                  : null
              }
            />
          )}
        />
      ) : (
        ''
      )}
    </React.Fragment>
  )
}
