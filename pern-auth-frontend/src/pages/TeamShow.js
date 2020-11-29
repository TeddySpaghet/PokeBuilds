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
    console.log(this.state)
    let pokemonList = ''
    if (this.state.team.pokemons) {
      pokemonList = this.state.team.pokemons.map((pokemon, index) => {
        return (
          <div>
            <h4 key={index}>{pokemon.name}</h4>
            <p>{pokemon.move0}</p>
            <p>{pokemon.move1}</p>
            <p>{pokemon.move2}</p>
            <p>{pokemon.move3}</p>
          </div>
        )
      })
    }

    return (
      <div>
        <div className='TeamCard'>
          <div className='image-wrap'>
            {/* <img src={props.coverArtUrl} alt='Game art' /> */}
          </div>
          <h3>{this.state.team.teamName}</h3>
          <p>{this.state.team.teamDescription}</p>
          {pokemonList}
          edit team
          <hr />
        </div>
        {/* {this.state.team.teamName ? <TeamCard {...this.state.team} /> : ''} */}
      </div>
    )
  }
}

export default TeamShow
