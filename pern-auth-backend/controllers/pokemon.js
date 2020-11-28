const db = require('../models')

const create = async (req, res) => {
  try {
    const { name, move0, move1, move2, move3, teamName } = await req.body
    // validate the POSTed data - making sure we have a name, an email, a p
    const pokemon = await db.pokemon.create({
      name,
      move0,
      move1,
      move2,
      move3,
      teamName,
    })
    const team = await db.team.findOrCreate({
      where: { teamName: teamName },
      include: [db.pokemon],
    })
    await team.addPokemon(pokemon)
  } catch (error) {
    console.log(error)
  }
  console.log("let's go baby")

  // .then((newPokemon) => {
  //   // console.log(newPokemon)
  //   res.json(newPokemon)
  //   db.team.findOrCreate({ where: { teamName: teamName } }).then((team) => {
  //     team.addPokemon()
  //     console.log('*********THIS IS NEW POKEMON', newPokemon)
  //     // x.addPokemon(newPokemon)
  //   })
  // })
}

// todo associate created pokemon with team
// db.team.find({ where: teamName }).then((foundTeam) => {
//   team.addPokemon()
// })

module.exports = {
  create,
}
