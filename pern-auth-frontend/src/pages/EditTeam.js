import React from 'react'
import { TeamProvider } from '../components/Contexts/TeamContext'
import PokeBox from '../components/PokeBox'

const EditTeam = () => {
  console.log('testing')
  return (
    <div>
      <h1>Edit Team</h1>
      <TeamProvider>
        <PokeBox />
      </TeamProvider>
    </div>
  )
}

export default EditTeam
