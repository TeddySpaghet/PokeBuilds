import React, { useState, useContext } from 'react'
import TeamModel from '../models/team'
import PokeContainerList from './PokeContainer/PokeContainerList'
import { TeamContext } from './Contexts/TeamContext'
import { TeamProvider } from './Contexts/TeamContext'
import { PokedexProvider } from './Contexts/PokedexContext'
import PokemonModel from '../models/pokemon'
import { Grid } from '@material-ui/core'

// TODO Build Team Function:

const PokeBox = (props) => {
  // const [team] = useContext(TeamContext)

  const [teamName, setTeamName] = useState('')
  const [teamDescription, setTeamDescription] = useState('')

  const handleTeamName = (e) => {
    setTeamName(e.target.value)
  }
  const handleTeamDescription = (e) => {
    setTeamDescription(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    TeamModel.create({
      teamName,
      teamDescription,
    }).then((data) => {
      console.log('Successful team creation', data)
    })

  //   for (let i in pokemon) {
  //     PokemonModel.create()
  //     // associate pokemon with TeamModel
  //   }
   }
  return (
    <div>
      <TeamProvider>
        <PokedexProvider>
          <Grid>
            <PokeContainerList />
          </Grid>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Team Name'
              onChange={handleTeamName}
            />
            <input
              type='text'
              placeholder='Team Description'
              onChange={handleTeamDescription}
            />
            <button type='submit'>Create Team</button>
          </form>
        </PokedexProvider>
      </TeamProvider>
    </div>
  )
}

export default PokeBox
