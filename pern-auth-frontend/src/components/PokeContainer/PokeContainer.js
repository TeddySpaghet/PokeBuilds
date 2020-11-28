import React, { useState, useEffect, useContext } from 'react'
import PokeChooser from './PokeChooser'
import MoveList from '../Moves/MoveList'
import StatList from '../Stats/StatList'
import missingno from '../../img/missigno.png'
import { TeamContext } from '../Contexts/TeamContext'
import './PokeContainer.scss'

const PokeContainer = ({ id }) => {
  const [pokemon, setPokemon] = useState()

  const [team, setTeam] = useContext(TeamContext)

  useEffect(() => {
    console.log('come on man!')
    if (pokemon) {
      setTeam({ ...team, [`pokemon${id}`]: pokemon.name })
    }
  }, [pokemon])

  return (
    <React.Fragment>
      <article className="poke-container">
        <span className="poke-header">
          <h1>{pokemon ? pokemon.name : 'missingno'}</h1>
          <img src={missingno} alt='missingno' />
        </span>
        <PokeChooser id={id} setPokemon={setPokemon} />
        <div className="poke-movelist">
          <MoveList id={id} pokemon={pokemon} />
        </div>
        <div className="poke-statlist">
          <StatList id={id} pokemon={pokemon} />
        </div>
      </article>
    </React.Fragment>
  )
}

export default PokeContainer
