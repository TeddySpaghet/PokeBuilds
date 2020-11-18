import React, { useState } from 'react'
import { Grid, Box, Button } from '@material-ui/core'
import ComboBox from './ComboBox'
import missingno from '../img/missigno.png'

function FormRow({ pokemon, setPokemon }) {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Box component='span' m={1} height={200} width={200}>
          <img src={missingno} alt='Logo' />
          <Button>Save</Button>
        </Box>
        <ComboBox pokemon={pokemon} setPokemon={setPokemon} />
      </Grid>
      <Grid item xs={4}>
        <Box component='span' m={1}>
          <img src={missingno} alt='Logo' />
          <Button>Save</Button>
        </Box>
        <ComboBox pokemon={pokemon} setPokemon={setPokemon} />
      </Grid>
    </React.Fragment>
  )
}

const PokeBox = () => {
  const [pokemon, setPokemon] = useState([])
//   *** WHEN DROPDOWN IS CLICKED, PASS DOWN SELECTED POKEMON STATE LOGIC
  const [selectedPokemon, setSelectedPokemon] = useState([])
  return (
    <div>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow
            pokemon={pokemon}
            setPokemon={setPokemon}
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow
            pokemon={pokemon}
            setPokemon={setPokemon}
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow
            pokemon={pokemon}
            setPokemon={setPokemon}
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        </Grid>
        <Button>Create Team</Button>
      </Grid>
    </div>
  )
}

export default PokeBox
