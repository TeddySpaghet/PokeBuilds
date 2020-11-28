const db = require('../models')

const create = async (req, res) => {
  try {
    const { name, move0, move1, move2, move3, teamId } = await req.body
    // validate the POSTed data - making sure we have a name, an email, a p
    const pokemon = await db.pokemon.create({
      name,
      move0,
      move1,
      move2,
      move3,
      teamId,
    })
    const team = await db.team.findOne({
      where: { id: teamId },
    })
    await team.addPokemon(pokemon)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  create,
}
