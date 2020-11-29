import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = (props) => {
  return (
    <header>
      <div className='logo'>
        <Link to={'/'}>Home!</Link>
      </div>
      <div className='links'>
        <ul>
          <li>
            <Link to={'/teams'}>teams</Link>
          </li>
          <li>
            <Link to={'/teams/create'}>create team</Link>
          </li>
          {props.currentUser ? (
            <>
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
