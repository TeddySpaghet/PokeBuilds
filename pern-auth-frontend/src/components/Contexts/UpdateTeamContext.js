// import { formatMs } from '@material-ui/core'
import React, { useState, createContext } from 'react'

export const UpdateTeamContext = createContext()

export const UpdateTeamProvider = ({ children }) => {
  const [team, setTeam] = useState({})

  return (
    <UpdateTeamContext.Provider value={[team, setTeam]}>
      {children}
    </UpdateTeamContext.Provider>
  )
}
