import React from 'react'
import { TeamProvider } from '../components/Contexts/TeamContext'
import PokeBox from '../components/PokeBox'

const CreateTeam = (props) => {
  console.log('testing')
  return (
    <div>
      <TeamProvider>
        <PokeBox props={props} />
      </TeamProvider>
    </div>
  )
}

export default CreateTeam
