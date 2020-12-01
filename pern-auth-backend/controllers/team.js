const db = require('../models')
const chalk = require('chalk')

const index = (req, res) => {
  db.team
    .findAll({ include: db.pokemon })
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

const indexByUser = (req, res) => {
  db.team
    .findAll({ where: { userId: req.params.id }, include: db.pokemon })
    .then((foundTeams) => {
      if (!foundTeams)
        return res.json({
          message: 'No Teams found in database.',
        })

      // respond with a JSON-ified object of users
      res.json({ teams: foundTeams })
    })
    .catch((err) => console.log('Error at teams by user#index', err))
}

const show = (req, res) => {
  db.team
    .findByPk(req.params.id, { include: db.pokemon })
    .then((foundTeam) => {
      if (!foundTeam)
        return res.json({
          message: 'Team with provided ID not found.',
        })

      res.json({ team: foundTeam })
    })
    .catch((err) => console.log('Error at teams#index', err))
}

const create = async (req, res) => {
  const { teamName, teamDescription, team, currentUser } = req.body

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
    userId: currentUser,
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
}

const update = (req, res) => {
  console.log(req.params)
  // make the update route
  db.team
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((updatedTeam) => {
      // Validations and error handling here
      res.json({ team: updatedTeam })
    })
    .catch((err) => console.log('Error at teams#index', err))
}

module.exports = {
  create,
  index,
  indexByUser,
  show,
  update,
}
