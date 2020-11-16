import React, { Component } from 'react';
import GameModel from '../models/game';

import GameCard from '../components/GameCard'

class GameShow extends Component {
  state = {
    game: {},
    currentGame: this.props.match.params.id
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    GameModel.show(this.state.currentGame).then(data => {
      this.setState({ game: data.game })
    })
  }

  render() {
    return (
      <div>
        <GameCard {...this.state.game} />
      </div>
    );
  }
}

export default GameShow;
