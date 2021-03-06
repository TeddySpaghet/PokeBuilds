import React, { useState, useEffect, useContext } from 'react'
import TeamModel from '../models/team'
import { TeamContext } from '../components/Contexts/TeamContext'
import EditPokeBox from '../components/Edit/EditPokeBox'
import { NewTeam } from '../components/NewTeam'

const EditTeam = (props) => {
  const [team, setTeam] = useContext(TeamContext)
  const currentTeamId = props.match.params.id

  const fetchData = () => {
    TeamModel.show(currentTeamId).then((data) => {
      setTeam({
        ...team,
        teamName: data.team.teamName,
        teamDescription: data.team.teamDescription,
        pokemon0: data.team.pokemons[0],
        pokemon1: data.team.pokemons[1],
        pokemon2: data.team.pokemons[2],
        pokemon3: data.team.pokemons[3],
        pokemon4: data.team.pokemons[4],
        pokemon5: data.team.pokemons[5],
      })
    })
  }

  // if (mode.mode === 'edit') {
  //   fetchData()
  // } else if (mode.mode === 'create') {
  //   setTeam(NewTeam)
  // }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h1>Edit {team.teamName}</h1>
      <EditPokeBox />
    </div>
  )
}

export default EditTeam
