import React, { useContext } from 'react'
import { ModeContext } from '../components/Contexts/ModeContext'
import { TeamProvider } from '../components/Contexts/TeamContext'
import PokeBox from '../components/PokeBox'

const CreateTeam = (props) => {
  const [mode, setMode] = useContext(ModeContext)

  // setMode({ mode: 'create', currentTeamId: null })

  console.log('testing')
  return (
    <div>
      <PokeBox props={props} />
    </div>
  )
}

export default CreateTeam
