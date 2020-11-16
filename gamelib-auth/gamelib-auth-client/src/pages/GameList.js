import React, { Component } from 'react'
import GameModel from '../models/game'

import { Link } from 'react-router-dom'
import GameCard from '../components/GameCard'

class GameList extends Component {
  state = {
    games: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    GameModel.all().then(data => {
      this.setState({ games: data.games })
    })
  }

  render() {
    let gameList = this.state.games.map((game, index) => {
      return (
        <Link to={`/games/${ game.id }`} key={index}>
          <GameCard  {...game} />
        </Link>
      )
    })

    return (
      <div>
        <h1>All Games</h1>
        { this.state.games ? gameList : 'Loading...' }
      </div>
    );
  }
}

export default GameList;
