import React from 'react'

const TeamCard = (props) => {
  const pokemonList = props.pokemons.map((pokemon, index) => {
    return <h4 key={index}>{pokemon.name}</h4>
  })
  return (
    <div className='TeamCard'>
      <h3 style={{ textDecoration: 'underline black' }}>
        {props.teamName ? props.teamName : 'something is wrong'}
      </h3>
      {pokemonList}
      <hr />
    </div>
  )
}

export default TeamCard
