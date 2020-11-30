// import { formatMs } from '@material-ui/core'
import React, { useState, useContext, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  console.log(children)
  // ***USER INPUT REAL DATA vs MOCK DATA: Comment out one of the below two lines

  // if edit [team, setUser] =

  // const [team, setUser] = useState(NewUser) // to use user inputted real
  const [user, setUser] = useState(localStorage.getItem('id')) // to use mock data

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}
