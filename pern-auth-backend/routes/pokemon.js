const router = require('express').Router()
const passport = require('../passport')
const pokemon = require('../controllers/pokemon')

router.post('/createpokemon', pokemon.create)

module.exports = router
