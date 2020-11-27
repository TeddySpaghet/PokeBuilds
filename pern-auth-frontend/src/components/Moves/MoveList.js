import React from 'react'
import MoveBox from './MoveBox'

function MoveBoxList({ id }) {
  const moves = [1, 2, 3, 4]
  const moveList = moves.map((move, index) => {
    return <MoveBox key={index} id={id} moveId={index} />
  })
  return <div>{moveList}</div>
}

export default MoveBoxList
