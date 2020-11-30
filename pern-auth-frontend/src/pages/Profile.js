import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import TeamCard from '../components/TeamCard'
import TeamModel from '../models/team'
import { UserContext } from '../UserContext'


const Profile = (props) => {
  const [currentUser, setCurrentUser] = useContext(UserContext)
  console.log(currentUser)

  const [teams, setTeams] = useState({
    teams: [],
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    TeamModel.allByUser(currentUser).then((data) => {
      setTeams({ teams: data.teams })
    })
  }

  let teamList = teams.teams.map((team, index) => {
    return (
      <Link to={`teams/${team.id}`} key={index}>
        <TeamCard {...team} />
      </Link>
    )
  })
  return (
    <div>
      <h1>Profile of user with ID {currentUser}</h1>
      <h3>User {currentUser}'s teams:</h3>
      {teams.teams ? teamList : 'Loading...'}
    </div>
  )
}

export default Profile
