import React from 'react'
import PokeContainer from './PokeContainer'
import { Grid } from '@material-ui/core'
import './PokeContainerList.scss'

function PokeContainerList() {
  const numPokemon = [1, 2, 3, 4, 5, 6]
  const pokemonList = numPokemon.map((item, index) => {
    return  <Grid className="grid" item xs={6}>
              <PokeContainer className="container" key={index} id={index} />
            </Grid>
          
  })
  return <React.Fragment>
            <Grid className="grid" container spacing={2}>
              {pokemonList}
            </Grid>
          </React.Fragment>
}

export default PokeContainerList
