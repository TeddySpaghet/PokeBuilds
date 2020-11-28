import React, { useState, useContext } from 'react'
import TeamModel from '../models/team'
import PokeContainerList from './PokeContainer/PokeContainerList'
// import { TeamContext } from './Contexts/TeamContext'
import { TeamProvider } from './Contexts/TeamContext'
import { PokedexProvider } from './Contexts/PokedexContext'
import PokemonModel from '../models/pokemon'

// TODO Build Team Function:

const PokeBox = (props) => {
  // const [team] = useContext(TeamContext)
  const [team] = useState({
    pokemon0: {
      name: 'bulbasaur',
      moves: { move0: 'razor-wind' },
    },
    // pokemon1: {
    //   name: 'ivysaur',
    //   moves: { move0: 'growl' },
    // },
    // pokemon2: {
    //   name: 'venonat',
    //   moves: { move0: 'mimic' },
    // },
    // pokemon3: {
    //   name: 'parasect',
    //   moves: { move0: 'protect' },
    // },
    // pokemon4: {
    //   name: 'poliwag',
    //   moves: { move0: 'blizzard' },
    // },
    // pokemon5: {
    //   name: 'tentacruel',
    //   moves: { move0: 'round' },
    // },
  })

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

    TeamModel.create({
      teamName,
      teamDescription,
    }).then((data) => {
      console.log('Successful team creation', data)
    })
    for (let i in team) {
      PokemonModel.create({
        name: team[i].name,
        move0: team[i].moves.move0,
        move1: team[i].moves.move1,
        move2: team[i].moves.move2,
        move3: team[i].moves.move3,
        teamName: teamName,
      }).then((data) => {
        console.log('Successful pokemon creation', data)
      })
    }
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
