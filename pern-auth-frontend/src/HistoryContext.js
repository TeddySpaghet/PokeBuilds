// import { formatMs } from '@material-ui/core'
import React, { useState, useContext, createContext } from 'react'

export const HistoryContext = createContext()

export const HistoryProvider = ({ children }) => {
  // ***USER INPUT REAL DATA vs MOCK DATA: Comment out one of the below two lines

  // if edit [team, setHistory] =

  // const [team, setHistory] = useState(NewHistory) // to use history inputted real
  const [history, setHistory] = useState() // to use mock data

  return (
    <HistoryContext.Provider value={[history, setHistory]}>
      {children}
    </HistoryContext.Provider>
  )
}
