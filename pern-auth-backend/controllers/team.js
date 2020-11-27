const db = require('../models')

const create = (req, res) => {
  console.log("let's go baby")
  const { teamName, teamDescription } = req.body

  // validate the POSTed data - making sure we have a name, an email, a p
  db.team
    .create({
      teamName,
      teamDescription,
    })
    .then((newTeam) => {
      console.log('New team created!')
      res.json(newTeam)
    })
}

module.exports = {
  create,
}
