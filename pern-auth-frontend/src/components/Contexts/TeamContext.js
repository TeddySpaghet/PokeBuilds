// import { formatMs } from '@material-ui/core'
import React, { useState, createContext } from 'react'

export const TeamContext = createContext()

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState()

  return (
    <TeamContext.Provider value={[team, setTeam]}>
      {children}
    </TeamContext.Provider>
  )
}
