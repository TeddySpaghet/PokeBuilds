import React, { useState, useEffect, useContext } from 'react'
import EditPokeChooser from './EditPokeChooser'
import EditMoveList from './EditMoveList'
import EditStatList from './EditStatList'
import missingno from '../../img/missigno.png'
import { TeamContext } from '../Contexts/TeamContext'
import './EditPokeContainer.scss'

const PokeContainer = ({ id }) => {
  const [pokemon, setPokemon] = useState()

  const [team, setTeam] = useContext(TeamContext)

  useEffect(() => {
    if (pokemon) {
      setTeam({ ...team, [`pokemon${id}`]: pokemon.name })
      console.log(pokemon)
    }
  }, [pokemon])

  return (
    <React.Fragment>
      <article className={'poke-container'}>
        <span className={'poke-header'}>
          <h1>{pokemon ? pokemon.name : 'missingno'}</h1>
          <img
            class='poke-image'
            src={
              pokemon
                ? pokemon.sprites.other['official-artwork'].front_default
                : missingno
            }
            alt='missingno'
          />
        </span>
        <div className='data-select'>
          <EditPokeChooser id={id} setPokemon={setPokemon} />
          <div className='poke-movelist'>
            <EditMoveList id={id} pokemon={pokemon} />
          </div>
        </div>
        {pokemon ? (
          <div className='poke-statlist'>
            <div className='table-header'>
              <p id='header-stats'>STATS</p>
              <p id='header-value'>VALUE</p>
            </div>
            <EditStatList id={id} pokemon={pokemon} />
          </div>
        ) : (
          ''
        )}
      </article>
    </React.Fragment>
  )
}

export default PokeContainer
