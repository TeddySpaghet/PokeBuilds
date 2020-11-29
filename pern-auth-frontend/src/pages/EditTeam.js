import React, { useState, useEffect } from 'react'
import TeamModel from '../models/team'
import { TeamProvider } from '../components/Contexts/TeamContext'
import PokeBox from '../components/PokeBox'

const EditTeam = (props) => {
  const [state, setState] = useState({
    team: {},
    currentTeam: props.match.params.id,
  })

  const fetchData = () => {
    TeamModel.show(state.currentTeam).then((data) => {
      setState({ team: data.team })
    })
  }

  useEffect(() => {
    fetchData()
  })
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
