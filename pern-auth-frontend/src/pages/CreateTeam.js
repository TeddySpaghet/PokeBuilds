import React, { useContext } from 'react'
import { TeamProvider } from '../components/Contexts/TeamContext'
import PokeBox from '../components/PokeBox'

const CreateTeam = (props) => {
  return (
    <div>
      <PokeBox props={props} />
    </div>
  )
}

export default CreateTeam
