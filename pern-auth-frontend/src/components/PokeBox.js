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
  const [pokeArray, setPokeArray] = useState({
    slot0: { name: null, moves: {} },
    slot1: { name: null, moves: {} },
    slot2: { name: null, moves: {} },
    slot3: { name: null, moves: {} },
    slot4: { name: null, moves: {} },
    slot5: { name: null, moves: {} },
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
              id={'slot0'}
              pokemon={pokemon}
              setPokemon={setPokemon}
              pokeArray={pokeArray}
              setPokeArray={setPokeArray}
            />
          </Grid>
          <Grid item xs={4}>
            <PokeContainer
              key={'2'}
              id={'slot1'}
              pokemon={pokemon}
              setPokemon={setPokemon}
              pokeArray={pokeArray}
              setPokeArray={setPokeArray}
            />
          </Grid>
          <Grid item xs={4}>
            <PokeContainer
              key={'3'}
              id={'slot2'}
              pokemon={pokemon}
              setPokemon={setPokemon}
              pokeArray={pokeArray}
              setPokeArray={setPokeArray}
            />
          </Grid>
          <Grid item xs={4}>
            <PokeContainer
              key={'4'}
              id={'slot3'}
              pokemon={pokemon}
              setPokemon={setPokemon}
              pokeArray={pokeArray}
              setPokeArray={setPokeArray}
            />
          </Grid>
          <Grid item xs={4}>
            <PokeContainer
              key={'5'}
              id={'slot4'}
              pokemon={pokemon}
              setPokemon={setPokemon}
              pokeArray={pokeArray}
              setPokeArray={setPokeArray}
            />
          </Grid>
          <Grid item xs={4}>
            <PokeContainer
              key={'6'}
              id={'slot5'}
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
