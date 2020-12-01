import React from 'react'
import StatBox from './StatBox'

const StatList = ({ pokemon, id }) => {
  const statArr = [
    'hp',
    'attack',
    'defense',
    'special attack',
    'special defense',
    'speed',
  ]

  const statList = statArr.map((stat, index) => {
    return <StatBox key={index} stat={stat} index={index} pokemon={pokemon} />
  })

  return <React.Fragment>{statList}</React.Fragment>
}

export default StatList
