import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import pokebuilds from "../../img/pokebuilds.png"
import HeaderMenu from './HeaderMenu'

const Header = (props) => {

    return (
      <header>
        <div className='logo'>
          <Link to={'/'}>
            <img src={pokebuilds} alt='' />
          </Link>
        </div>
        <div className='links'>
            <HeaderMenu currentUser={props.currentUser} logout={props.logout}></HeaderMenu>
          <ul>
            {props.currentUser ? (
              <>
                <li>
                  <Link to={'/teams'}>Teams</Link>
                </li>
                <li>
                  <Link to={'/teams/create'}>Create Team</Link>
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
