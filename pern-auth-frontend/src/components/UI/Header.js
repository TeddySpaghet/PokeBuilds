import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
// import pokebuilds from './src/img/pokebuilds.png'

const Header = (props) => {
  return (
    <header>
      <div className='logo'>
      {/* <img src={pokebuilds} alt='' /> */}
        <Link to={'/'}>Home!</Link>
      </div>
      <div className='links'>
        <ul>
          {props.currentUser ? (
            <>
              <li>
                <Link to={'/teams'}>teams</Link>
              </li>
              <li>
                <Link to={'/teams/create'}>create team</Link>
              </li>
              <li>
                <Link to={'/profile'}>Profile</Link>
              </li>
              <li>
                <a href='/logout' onClick={props.logout}>
                  Log Out
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={'/register'}>Register</Link>
              </li>
              <li>
                <Link to={'/login'}>Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Header
