"use strict";

var router = require('express').Router();

var passport = require('../passport');

var team = require('../controllers/team');

router.get('/', team.index);
router.post('/createteam', team.create);
module.exports = router;