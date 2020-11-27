import React, { useState, useEffect, useContext } from 'react'
import MoveBox from './MoveBox'
import { TeamContext } from '../Contexts/TeamContext'

function MoveBoxList({ id, pokemon }) {
  const [team, setTeam] = useContext(TeamContext)
  const [moves, setMoves] = useState({})

  const numMoves = [1, 2, 3, 4]
  const moveList = numMoves.map((move, index) => {
    return (
      <MoveBox
        key={index}
        id={id}
        moveId={index}
        pokemon={pokemon}
        moves={moves}
        setMoves={setMoves}
      />
    )
  })

  useEffect(() => {
    if (pokemon) {
      setTeam({
        ...team,
        [`pokemon${id}`]: { name: pokemon.name, moves: moves },
      })
    }
  }, [moves])

  return <React.Fragment>{moveList}</React.Fragment>
}

export default MoveBoxList
