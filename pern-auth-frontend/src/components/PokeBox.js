import React, { useState, useEffect } from 'react'
import { Grid, Button } from '@material-ui/core'
// import MoveBox from './MoveBox'
import Pokedex from 'pokedex-promise-v2'
import PokeContainer from './PokeContainer'

const PokeBox = ({
  selectedPokemon,
  setSelectedPokemon,
  selectedPokemonData,
  setSelectedPokemonData,
}) => {
  // array where individual pokemon are pushed
  // const [pokeArray, setPokeArray] = useState([])
  // *** OBJECT VARIATION
  const [pokeArray, setPokeArray] = useState({
    0: { name: null, moves: { 0: null, 1: null, 2: null, 3: null } },
    1: { name: null, moves: { 0: null, 1: null, 2: null, 3: null } },
    2: { name: null, moves: { 0: null, 1: null, 2: null, 3: null } },
    3: { name: null, moves: { 0: null, 1: null, 2: null, 3: null } },
    4: { name: null, moves: { 0: null, 1: null, 2: null, 3: null } },
    5: { name: null, moves: { 0: null, 1: null, 2: null, 3: null } },
  })
  // team where pokeArray is added
  const exampleTeam = {
    name: 'Team1',
    Description: 'Description',
    Pokemon: pokeArray,
    userId: 1,
  }
  const [team, setTeam] = useState(exampleTeam)

  // grab full list of Pokemon
  const [pokemon, setPokemon] = useState([])
  const getPokemon = () => {
    const P = new Pokedex()
    P.getPokemonsList().then((response) => setPokemon(response.results))
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div>
      <Grid container spacing={10}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <PokeContainer
              key={'1'}
              id={0}
              pokemon={pokemon}
              setPokemon={setPokemon}
              pokeArray={pokeArray}
              setPokeArray={setPokeArray}
            />
          </Grid>
          <Grid item xs={4}>
            <PokeContainer
              key={'2'}
              id={1}
              pokemon={pokemon}
              setPokemon={setPokemon}
              pokeArray={pokeArray}
              setPokeArray={setPokeArray}
            />
          </Grid>
          <Grid item xs={4}>
            <PokeContainer
              key={'3'}
              id={2}
              pokemon={pokemon}
              setPokemon={setPokemon}
              pokeArray={pokeArray}
              setPokeArray={setPokeArray}
            />
          </Grid>
          <Grid item xs={4}>
            <PokeContainer
              key={'4'}
              id={3}
              pokemon={pokemon}
              setPokemon={setPokemon}
              pokeArray={pokeArray}
              setPokeArray={setPokeArray}
            />
          </Grid>
          <Grid item xs={4}>
            <PokeContainer
              key={'5'}
              id={4}
              pokemon={pokemon}
              setPokemon={setPokemon}
              pokeArray={pokeArray}
              setPokeArray={setPokeArray}
            />
          </Grid>
          <Grid item xs={4}>
            <PokeContainer
              key={'6'}
              id={5}
              pokemon={pokemon}
              setPokemon={setPokemon}
              pokeArray={pokeArray}
              setPokeArray={setPokeArray}
            />
          </Grid>
        </Grid>
        <Button>Create Team</Button>
      </Grid>
    </div>
  )
}

export default PokeBox
