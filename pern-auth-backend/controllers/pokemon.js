const db = require('../models')

const create = (req, res) => {
  console.log("let's go baby")
  const { teamName, teamDescription } = req.body

  // validate the POSTed data - making sure we have a name, an email, a p
  db.pokemon
    .create({
      name,
      move0,
      move1,
      move2,
      move3,
    })
    .then((newPokemon) => {
      console.log('New pokemon created!')
      res.json(newPokemon)
    })
}

module.exports = {
  create,
}
