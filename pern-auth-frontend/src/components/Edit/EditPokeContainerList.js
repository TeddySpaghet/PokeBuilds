import React from 'react'
import EditPokeContainer from './EditPokeContainer'
import { Grid } from '@material-ui/core'
import './EditPokeContainerList.scss'

function PokeContainerList() {
  const numPokemon = [1, 2, 3, 4, 5, 6]
  const pokemonList = numPokemon.map((item, index) => {
    return (
      <Grid className='grid' item xs={6}>
        <EditPokeContainer className='container' key={index} id={index} />
      </Grid>
    )
  })
  return (
    <React.Fragment>
      <Grid className='container' container spacing={2}>
        {pokemonList}
      </Grid>
    </React.Fragment>
  )
}

export default PokeContainerList
