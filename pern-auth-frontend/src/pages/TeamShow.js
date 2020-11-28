import React, { Component } from 'react'
import TeamModel from '../models/team'

import TeamCard from '../components/TeamCard'

class TeamShow extends Component {
  state = {
    team: {},
    currentTeam: this.props.match.params.id,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    TeamModel.show(this.state.currentTeam).then((data) => {
      console.log(data)
      this.setState({ team: data.team })
    })
  }

  render() {
    return (
      <div>
        <TeamCard {...this.state.team} />
      </div>
    )
  }
}

export default TeamShow
