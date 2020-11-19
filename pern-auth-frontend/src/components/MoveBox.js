import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Pokedex from 'pokedex-promise-v2'

const MoveBox = ({ selectedPokemon, selectedPokemonData }) => {
  const [selectedMove, setSelectedMove] = useState(null)

  useEffect(() => {}, [selectedPokemon])

  return (
    <div>
      {selectedPokemonData ? (
        <Autocomplete
          onChange={(event, value) =>
            setSelectedMove([
              selectedPokemonData.moves.find((x) => value === x.name),
            ])
          }
          id='combo-box-demo'
          options={selectedPokemonData.moves.map((x) => x.move.name)}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label='Pokemon' variant='outlined' />
          )}
        />
      ) : (
        'loading'
      )}
    </div>
  )
}

export default MoveBox
