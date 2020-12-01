import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import TeamsPage from '../pages/TeamsPage'
import TeamShow from '../pages/TeamShow'
import CreateTeam from '../pages/CreateTeam'
import EditTeam from '../pages/EditTeam'
import { TeamProvider } from '../components/Contexts/TeamContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = localStorage.getItem('id')
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }}
    />
  )
}

const Routes = (props) => (
  <TeamProvider>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/register' component={Register} />
      <PrivateRoute path='/teams/create' component={CreateTeam} />

      <PrivateRoute path='/teams/:id/edit' component={EditTeam} />

      <PrivateRoute path='/teams/:id' component={TeamShow} />
      <PrivateRoute path='/teams' component={TeamsPage} />
      <Route
        path='/login'
        render={(routeComponentProps) => {
          return (
            <Login
              {...routeComponentProps}
              // more props to come here
              currentUser={props.currentUser}
              storeUser={props.storeUser}
            />
          )
        }}
      />
      <PrivateRoute
        path='/profile'
        component={Profile}
        currentUser={props.currentUser}
      />
    </Switch>
  </TeamProvider>
)

export default Routes
