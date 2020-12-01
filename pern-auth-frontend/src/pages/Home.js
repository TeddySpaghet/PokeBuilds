import React from 'react'
import pokebuilds from '../img/pokebuilds.png'
import pokeball from '../img/Poke_Ball.png'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <img className="home-logo" src={pokebuilds} alt='' />
      <p id="home-Title"> Create your Dream Team here! </p>
      <img src={pokeball} alt='' />
    </div>
  )
}

export default Home
