import React, { Component, useState, useEffect } from 'react'
import TeamModel from '../models/team'

import { Link } from 'react-router-dom'
import TeamCard from '../components/TeamCard'

// TODO turn TeamsPage into a functional component
class TeamsPage extends Component {
  state = {
    teams: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    TeamModel.all().then((data) => {
      this.setState({ teams: data.teams })
    })
  }

  render() {
    let teamList = this.state.teams.map((team, index) => {
      return (
        <Link to={`/teams/${team.id}`} key={index}>
          <TeamCard {...team} />
        </Link>
      )
    })

    return (
      <div>
        <h1>All Teams</h1>
        {this.state.teams ? teamList : 'Loading...'}
      </div>
    )
  }
}

export default TeamsPage
