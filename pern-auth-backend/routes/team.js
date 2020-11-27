const router = require('express').Router()
const passport = require('../passport')
const ctrl = require('../controllers')

router.post('/createteam', ctrl.auth.create)

module.exports = router
