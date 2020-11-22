import React, { useState, useEffect } from 'react'
import { Grid, Button } from '@material-ui/core'
// import MoveBox from './MoveBox'
import Pokedex from 'pokedex-promise-v2'
import PokeContainer from './PokeContainer'
import { TeamProvider } from './TeamContext'
import { PokedexProvider } from './PokedexContext'

const PokeBox = () => {
  // grab full list of Pokemon
  // const [pokemon, setPokemon] = useState([])
  // const getPokemon = () => {
  //   const P = new Pokedex()
  //   P.getPokemonsList().then((response) => setPokemon(response.results))
  // }

  // useEffect(() => {
  //   getPokemon()
  // }, [])

  return (
    <div>
      <TeamProvider>
        <PokedexProvider>
          <PokeContainer key={'1'} id={'0'} />
          <PokeContainer key={'2'} id={'1'} />
          <PokeContainer key={'3'} id={'2'} />
          <PokeContainer key={'4'} id={'3'} />
          <PokeContainer key={'5'} id={'4'} />
          <PokeContainer key={'6'} id={'5'} />
          <Button>Create Team</Button>
        </PokedexProvider>
      </TeamProvider>
    </div>
  )
}

export default PokeBox
