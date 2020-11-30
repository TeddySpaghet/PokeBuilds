import React, { useEffect } from 'react'
import './StatBox.scss'


const StatBox = ({ stat, index, pokemon }) => {
  useEffect(() => {}, [pokemon])
  return (
    <React.Fragment>
      {pokemon ? (          
        <div className="table-stat">
          <p id="stat-name">{stat}</p>
          <div className="stat-bar">
            <div className={`percentage percentage-${pokemon.stats[index].base_stat}`}></div>
          </div>
          <p id="stat-value">{pokemon.stats[index].base_stat}</p>
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  )
}

export default StatBox
