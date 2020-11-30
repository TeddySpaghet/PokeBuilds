// import { formatMs } from '@material-ui/core'
import React, { useState, useContext, createContext } from 'react'
import TeamModel from '../../models/team'
import { MockTeam } from '../MockTeam'
import { NewTeam } from '../NewTeam'
import { ModeContext } from './ModeContext'

export const TeamContext = createContext()

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState(NewTeam)

  // ***USER INPUT REAL DATA vs MOCK DATA: Comment out one of the below two lines

  // to use user inputted real
  // const [team, setTeam] = useState(MockTeam) // to use mock data

  return (
    <TeamContext.Provider value={[team, setTeam]}>
      {children}
    </TeamContext.Provider>
  )
}
