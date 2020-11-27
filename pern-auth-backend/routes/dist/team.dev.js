"use strict";

var router = require('express').Router();

var passport = require('../passport');

var ctrl = require('../controllers');

router.post('/createteam', ctrl.auth.create);
module.exports = router;