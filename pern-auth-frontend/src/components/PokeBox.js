import React, { useState } from 'react'
import { Grid, Box, Button } from '@material-ui/core'
import ComboBox from './ComboBox'
import missingno from '../img/missigno.png'
import MoveBox from './MoveBox'



function FormRow({
  pokemon,
  setPokemon,
  selectedPokemon,
  setSelectedPokemon,
  moves,
  setMoves,
}) {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Box component='span' m={1} height={200} width={200}>
          <h1>{selectedPokemon ? selectedPokemon[0].name : 'missingno'}</h1>
          <img src={{selectedPokemon ? selectedPokemon[0].name : missingno}} alt='Logo' />
          <Button>Save</Button>
        </Box>
        <ComboBox
          pokemon={pokemon}
          setPokemon={setPokemon}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
        <MoveBox
          selectedPokemon={selectedPokemon}
          moves={moves}
          setMoves={setMoves}
        />
      </Grid>
    </React.Fragment>
  )
}

const PokeBox = ({ moves, setMoves }) => {
  const [pokemon, setPokemon] = useState([])
  //   *** WHEN DROPDOWN IS CLICKED, PASS DOWN SELECTED POKEMON STATE LOGIC
  const [selectedPokemon, setSelectedPokemon] = useState(null)
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
