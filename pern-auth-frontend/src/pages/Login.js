import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import UserModel from '../models/user'
import './Login.scss'

const Login = (props) => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let handleEmail = (e) => {
    setEmail(e.target.value)
  }

  let handlePassword = (e) => {
    setPassword(e.target.value)
  }

  let handleSubmit = (event) => {
    event.preventDefault()

    UserModel.login({
      email,
      password,
    })
      .then((data) => {
        if (!data.user) {
          console.log('Login Unsuccessful')
          return false
        }
        // storeUser is defined in the app component and passed to Login
        props.storeUser(data.user)
      })
      .catch((err) => console.log('Login Error', err))
  }

  // if user is logged in, redirect
  if (props.currentUser) return <Redirect to='/profile' />

  return (
    <div className='login-container'>
      <h4>Login</h4>
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='form-group'>
          <label htmlFor='name'>Email</label>
          <input
            onChange={handleEmail}
            value={email}
            type='email'
            id='email'
            name='email'
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            onChange={handlePassword}
            value={password}
            type='password'
            id='password'
            name='password'
            required
          />
        </div>
        <button className='btn-submit' type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
