import React, { useState, useContext } from 'react'
import TeamModel from '../models/team'
import PokeContainerList from './PokeContainer/PokeContainerList'
import { TeamContext } from './Contexts/TeamContext'
import { PokedexProvider } from './Contexts/PokedexContext'
import PokemonModel from '../models/pokemon'

const PokeBox = (props) => {

  // what is the mode context? 
  // On edit page, it needs to pulled from currentTeam.team.
  // On create page, it needs to be pulled from TeamContext

  // if it's coming 
  const [team] = useContext(TeamContext)

  const [teamName, setTeamName] = useState('wow')
  const [teamDescription, setTeamDescription] = useState('ok')

  const handleTeamName = (e) => {
    setTeamName(e.target.value)
  }
  const handleTeamDescription = (e) => {
    setTeamDescription(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // todo find teammodel, if none, then create

    TeamModel.create({
      teamName,
      teamDescription,
      team,
    }).then((data) => {
      console.log('Successful team creation', data)
    })
  }
  return (
    <div>
      <PokedexProvider>
        <PokeContainerList />
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
          {/* <input
          type='hidden'
          something set userId/> */}
          <button type='submit'>Create Team</button>
        </form>
      </PokedexProvider>
    </div>
  )
}

export default PokeBox
