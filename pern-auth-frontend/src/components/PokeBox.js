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
  // TODO DO WE NEED STATE FOR TEAM? OR SHOULD WE JUST PULL TEAM STUFF FROM DATABASE WHENEVER WE RENDER A PREEXISTING TEAM?
  // const [team, setTeam] = useState()

  // const createTeam = () => {
  // for numbers 1 to 6
  // iterate over PokeContainer with key={i}
  // for each PokeContainer key={i}, grab selectedPokemon
  // for numbers 1 to 4
  // iterate over MoveContainer with key={i}
  // for each MoveContainer key={i}, grab selectedMove
  // do stuff

  //   setTeam({`create team form value`})
  // }

  // *** END OF TEAM

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
              pokemon={pokemon}
              setPokemon={setPokemon}
            />
          </Grid>
          <Grid item xs={4}>
            <PokeContainer
              key={'2'}
              pokemon={pokemon}
              setPokemon={setPokemon}
            />
          </Grid>
          <Grid item xs={4}>
            <PokeContainer
              key={'3'}
              pokemon={pokemon}
              setPokemon={setPokemon}
            />
          </Grid>
          <Grid item xs={4}>
            <PokeContainer
              key={'4'}
              pokemon={pokemon}
              setPokemon={setPokemon}
            />
          </Grid>
          <Grid item xs={4}>
            <PokeContainer
              key={'5'}
              pokemon={pokemon}
              setPokemon={setPokemon}
            />
          </Grid>
          <Grid item xs={4}>
            <PokeContainer
              key={'6'}
              pokemon={pokemon}
              setPokemon={setPokemon}
            />
          </Grid>
        </Grid>
        <Button>Create Team</Button>
      </Grid>
    </div>
  )
}

export default PokeBox
