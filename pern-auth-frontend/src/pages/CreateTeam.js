import React from 'react'
import { TeamProvider } from '../components/Contexts/TeamContext'
import PokeBox from '../components/PokeBox'

const CreateTeam = () => {
  console.log('testing')
  return (
    <div>
      <TeamProvider>
        <PokeBox />
      </TeamProvider>
    </div>
  )
}

export default CreateTeam
