import React, { useState, useContext } from 'react'
import TeamModel from '../../models/team'
import EditPokeContainerList from './EditPokeContainerList'
import { TeamContext } from '../Contexts/TeamContext'
import { PokedexProvider } from '../Contexts/PokedexContext'
import PokemonModel from '../../models/pokemon'
import { UserContext } from '../../UserContext'
import './EditPokeBox.scss'

const PokeBox = (props) => {
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

    console.log(team)

    // TODO conditionally call the TeamModel.update or TeamModel.create. Also create a MODE context.
    // if(mode==='create'){
    TeamModel.update({
      teamName,
      teamDescription,
      team,
    }).then((data) => {
      console.log('Successful team update', data)
    })
    // }
  }
  return (
    <div>
      <PokedexProvider>
        <EditPokeContainerList />
        <form className='team-submit-form' onSubmit={handleSubmit}>
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
          <button className='btn-submit' type='submit'>
            Edit Team
          </button>
        </form>
      </PokedexProvider>
    </div>
  )
}

export default PokeBox
