// import { formatMs } from '@material-ui/core'
import React, { useState, createContext } from 'react'

const buildTeamObj = () => {
  let team = {}
  let pokemon = { name: null, moves: {} }

  for (let i = 0; i < 6; i++) {
    team = { ...team, [`pokemon${i}`]: pokemon }
    for (let j = 0; j < 4; j++) {
      team[`pokemon${i}`].moves = {
        ...team[`pokemon${i}`].moves,
        [`move${j}`]: null,
      }
    }
  }
  return team
}

export const TeamContext = createContext()

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState(buildTeamObj())

  return (
    <TeamContext.Provider value={[team, setTeam]}>
      {children}
    </TeamContext.Provider>
  )
}
