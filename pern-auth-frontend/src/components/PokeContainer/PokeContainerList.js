import React from 'react'
import PokeContainer from './PokeContainer'
import { Grid } from '@material-ui/core'

function PokeContainerList() {
  const numPokemon = [1, 2, 3, 4, 5, 6]
  const pokemonList = numPokemon.map((item, index) => {
    return <Grid item xs={6}>
      <PokeContainer key={index} id={index} />
    </Grid>
  })
  return <React.Fragment>{pokemonList}</React.Fragment>
}

export default PokeContainerList
