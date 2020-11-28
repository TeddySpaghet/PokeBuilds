import React from 'react'

const TeamCard = (props) => {
  return (
    <div className='TeamCard'>
      <h3>{props.teamName ? props.teamName : 'something is wrong'}</h3>
      <hr />
    </div>
  )
}

export default TeamCard
