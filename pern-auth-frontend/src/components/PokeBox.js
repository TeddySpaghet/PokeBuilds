import React, { useState, useContext } from 'react'
import TeamModel from '../models/team'
import { Button } from '@material-ui/core'
import PokeContainerList from './PokeContainer/PokeContainerList'
import { TeamContext } from './Contexts/TeamContext'
import { TeamProvider } from './Contexts/TeamContext'
import { PokedexProvider } from './Contexts/PokedexContext'

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

    if (true) {
      TeamModel.create({ teamName, teamDescription }).then((data) => {
        console.log('Successful team creation', data)
      })
    }
  }
  return (
    <div>
      <TeamProvider>
        <PokedexProvider>
          <PokeContainerList />
          <Button onClick={handleSubmit}>Create Team</Button>
        </PokedexProvider>
      </TeamProvider>
    </div>
  )
}

export default PokeBox
