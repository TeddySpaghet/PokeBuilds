import React, { useState, useContext } from 'react'
import Header from './components/UI/Header'
import Footer from './components/UI/Footer'
import PokeBox from './components/PokeBox'
import Routes from './config/Routes'
import './App.css'
import UserModel from './models/user'
import { UserContext, UserProvider } from './UserContext'

function App() {
  const [currentUser, setCurrentUser] = useContext(UserContext)

  const storeUser = (userId) => {
    localStorage.setItem('id', userId)
    setCurrentUser(userId)
  }

  const logout = (event) => {
    event.preventDefault()

    localStorage.removeItem('id')

    UserModel.logout().then((res) => {
      setCurrentUser(null)
    })
  }

  return (
    <div className='App'>
      <Header currentUser={currentUser} logout={logout} />
      <Routes currentUser={currentUser} storeUser={storeUser} />
      <Footer />
    </div>
  )
}

export default App
