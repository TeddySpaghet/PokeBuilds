import React from 'react'
import chalk from 'chalk'

const TeamCard = (props) => {
  console.log(props)
  const pokemonList = props.pokemons.map((pokemon, index) => {
    return <h4 key={index}>{pokemon.name}</h4>
  })
  return (
    <div className='TeamCard'>
      <h3 style={{ textDecoration: 'underline black' }}>
        {props.teamName ? props.teamName : 'something is wrong'}
      </h3>
      <h4>Pokemon:</h4>
      {pokemonList}
      <hr />
    </div>
  )
}

export default TeamCard
