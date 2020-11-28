const db = require('../models')
const chalk = require('chalk')

const index = (req, res) => {
  db.team
    .findAll()
    .then((foundTeams) => {
      if (!foundTeams)
        return res.json({
          message: 'No Teams found in database.',
        })

      // respond with a JSON-ified object of users
      res.json({ teams: foundTeams })
    })
    .catch((err) => console.log('Error at teams#index', err))
}

const create = async (req, res) => {
  const { teamName, teamDescription, team } = req.body

  const preexistingTeam = await db.team.findOne({
    where: { teamName },
  })

  if (preexistingTeam) {
    return res.json({
      message: 'A team with that name already exists',
    })
  }

  const createdTeam = await db.team.create({
    teamName,
    teamDescription,
  })

  for (let i in team) {
    const createdPokemon = await db.pokemon.create({
      name: team[i].name,
      move0: team[i].moves.move0,
      move1: team[i].moves.move1,
      move2: team[i].moves.move2,
      move3: team[i].moves.move3,
      teamId: createdTeam.id,
    })
  }
  await console.log('New team created!')
}

module.exports = {
  create,
  index,
}
