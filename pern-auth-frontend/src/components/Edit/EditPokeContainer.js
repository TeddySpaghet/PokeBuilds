import React, { useState, useEffect, useContext } from 'react'
import EditPokeChooser from './EditPokeChooser'
import MoveList from '../Moves/MoveList'
import StatList from '../Stats/StatList'
import missingno from '../../img/missigno.png'
import { TeamContext } from '../Contexts/TeamContext'

const PokeContainer = ({ id }) => {
  const [pokemon, setPokemon] = useState()

  const [team, setTeam] = useContext(TeamContext)

  useEffect(() => {
    if (pokemon) {
      setTeam({ ...team, [`pokemon${id}`]: pokemon.name })
    }
  }, [pokemon])

  return (
    <React.Fragment>
      <h1>{pokemon ? pokemon.name : 'missingno'}</h1>
      <img src={missingno} alt='missingno' />
      <EditPokeChooser id={id} setPokemon={setPokemon} />
      <MoveList id={id} pokemon={pokemon} />
      <StatList id={id} pokemon={pokemon} />
    </React.Fragment>
  )
}

export default PokeContainer
