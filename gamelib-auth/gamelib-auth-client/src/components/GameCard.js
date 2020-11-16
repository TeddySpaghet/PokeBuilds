import React from 'react';
import './GameCard.scss'

const GameCard = (props) => {
  return (
    <div className="GameCard">
      <div className="image-wrap">
        <img src={ props.coverArtUrl } alt="Game art"/>
      </div>
      <h3>{ props.title }</h3>
      <p>By: { props.publisher }</p>
      <hr />
    </div>
  );
}

export default GameCard;
