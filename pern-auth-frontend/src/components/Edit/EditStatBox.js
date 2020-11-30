import React, { useEffect } from 'react'

const StatBox = ({ stat, index, pokemon }) => {
  useEffect(() => {}, [pokemon])
  return (
    <React.Fragment>
      {pokemon ? (
        <div>
          <p>{stat}</p>
          <p>{pokemon.stats[index].base_stat}</p>
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  )
}

export default StatBox
