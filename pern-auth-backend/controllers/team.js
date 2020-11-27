const db = require('../models')

const create = (req, res) => {
  const { name, description, pokemon } = req.body

  // validate the POSTed data - making sure we have a name, an email, a pw
  if (!name) {
    return res.json({
      message: 'Please enter a team name',
    })
  }
  if (!pokemon) {
    return res.json({
      message: 'Please complete a full team',
    })
  }

  db.team.findOne({ where: { name } }).then((foundTeam) => {
    if (foundTeam) {
      return res.json({ message: 'A team with that name already exists' })
    }

    db.team
      .create({
        name,
        description,
        pokemon,
      })
      .then((newTeam) => {
        console.log('New team created!')
        res.json(newTeam)
      })
  })
}

module.exports = {
  create,
}
