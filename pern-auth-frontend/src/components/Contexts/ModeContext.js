// import { formatMs } from '@material-ui/core'
import React, { useState, useContext, createContext } from 'react'

export const ModeContext = createContext()

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState({
    mode: 'create',
    currentTeamId: null,
  })

  return (
    <ModeContext.Provider value={[mode, setMode]}>
      {children}
    </ModeContext.Provider>
  )
}
