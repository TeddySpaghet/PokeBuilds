const router = require('express').Router()
const passport = require('../passport')
const team = require('../controllers/team')

router.post('/createteam', team.create)

module.exports = router