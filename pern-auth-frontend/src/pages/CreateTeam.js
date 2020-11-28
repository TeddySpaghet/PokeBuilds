import React from 'react'
import { TeamProvider } from '../components/Contexts/TeamContext'
import PokeBox from '../components/PokeBox'

const CreateTeam = (props) => {
  console.log('testing')
  return (
    <div>
      <h1>TESTING!!!!!!!!</h1>
      <TeamProvider>
        <PokeBox />
      </TeamProvider>
    </div>
  )
}

export default CreateTeam
