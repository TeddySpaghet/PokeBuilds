import React, { useState, useEffect } from 'react'
import { Grid, Button } from '@material-ui/core'
// import MoveBox from './MoveBox'
import Pokedex from 'pokedex-promise-v2'
import PokeContainer from './PokeContainer'

function FormRow({
  pokemon,
  setPokemon,
  selectedPokemon,
  setSelectedPokemon,
  selectedPokemonData,
  setSelectedPokemonData,
}) {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <PokeContainer
          pokemon={pokemon}
          setPokemon={setPokemon}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          selectedPokemonData={selectedPokemonData}
          setSelectedPokemonData={setSelectedPokemonData}
        />
        <PokeContainer
          pokemon={pokemon}
          setPokemon={setPokemon}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          selectedPokemonData={selectedPokemonData}
          setSelectedPokemonData={setSelectedPokemonData}
        />
        <PokeContainer
          pokemon={pokemon}
          setPokemon={setPokemon}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          selectedPokemonData={selectedPokemonData}
          setSelectedPokemonData={setSelectedPokemonData}
        />
        {/* <Box component='span' m={1} height={200} width={200}>
          <h1>{selectedPokemon ? selectedPokemon[0].name : 'missingno'}</h1> */}
        {/* <img src={{selectedPokemon ? selectedPokemon[0].name : missingno}} alt='Logo' /> */}
        {/* <Button>Save</Button> */}
        {/* </Box> */}
        {/* <ComboBox
          pokemon={pokemon}
          setPokemon={setPokemon}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
        <MoveBox
          selectedPokemon={selectedPokemon}
          moves={moves}
          setMoves={setMoves}
        /> */}
      </Grid>
    </React.Fragment>
  )
}

const PokeBox = () => {
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
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow pokemon={pokemon} />
          <FormRow pokemon={pokemon} />
        </Grid>
        <Button>Create Team</Button>
      </Grid>
    </div>
  )
}

export default PokeBox
