const router = require('express').Router()
const passport = require('../passport')
const team = require('../controllers/team')

router.get('/', team.index)
router.post('/createteam', team.create)

module.exports = router
