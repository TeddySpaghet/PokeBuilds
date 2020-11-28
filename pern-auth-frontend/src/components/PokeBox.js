import React, { useState, useContext } from 'react'
import TeamModel from '../models/team'
import PokeContainerList from './PokeContainer/PokeContainerList'
import { TeamContext } from './Contexts/TeamContext'
import { TeamProvider } from './Contexts/TeamContext'
import { PokedexProvider } from './Contexts/PokedexContext'
import PokemonModel from '../models/pokemon'
import { MockTeam } from './MockTeam'

const PokeBox = (props) => {
  // ***USER INPUT REAL DATA vs MOCK DATA: Comment out one of the below two lines
  const [team] = useContext(TeamContext) // to use user inputted real data
  // const [team] = useState(MockTeam) // to use mock data

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

    // todo find teammodel, if none, then create

    TeamModel.create({
      teamName,
      teamDescription,
      team,
    }).then((data) => {
      console.log('Successful team creation', data)
      // console.log(data.id)
      // for (let i in team) {
      //   PokemonModel.create({
      //     name: team[i].name,
      //     move0: team[i].moves.move0,
      //     move1: team[i].moves.move1,
      //     move2: team[i].moves.move2,
      //     move3: team[i].moves.move3,
      //     teamId: data.id,
      //   }).then((data) => {
      //     console.log('Successful pokemon creation', data)
      //   })
      // }
    })
  }
  return (
    <div>
      <PokedexProvider>
        <PokeContainerList />
        <form onSubmit={handleSubmit}>
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
          <button type='submit'>Create Team</button>
        </form>
      </PokedexProvider>
    </div>
  )
}

export default PokeBox
