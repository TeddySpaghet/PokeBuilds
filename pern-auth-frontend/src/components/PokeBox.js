import React, { useState, useContext } from 'react'
import TeamModel from '../models/team'
import PokeContainerList from './PokeContainer/PokeContainerList'
import { TeamContext } from './Contexts/TeamContext'
import { PokedexProvider } from './Contexts/PokedexContext'
import PokemonModel from '../models/pokemon'
import { UserContext } from '../UserContext'
import './PokeBox.scss'
import { ModeContext } from './Contexts/ModeContext'

const PokeBox = (props) => {
  // what is the mode context?
  // On edit page, it needs to pulled from currentTeam.team.
  // On create page, it needs to be pulled from TeamContext

  const [mode, setMode] = useContext(ModeContext)
  const [currentUser, setCurrentUser] = useContext(UserContext)

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

    console.log(currentUser)

    // TODO conditionally call the TeamModel.update or TeamModel.create. Also create a MODE context.
    // if(mode==='create'){
    TeamModel.create({
      teamName,
      teamDescription,
      team,
      currentUser,
    }).then((data) => {
      console.log('Successful team creation', data)
    })
    // }
  }
  return (
    <div>
      <PokedexProvider>
        <PokeContainerList />
        <form className="team-submit-form" onSubmit={handleSubmit}>
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
          <button className="btn-submit" type='submit'>
            {mode === 'create' ? 'Create Team' : 'Edit Team'}
          </button>
        </form>
      </PokedexProvider>
    </div>
  )
}

export default PokeBox
