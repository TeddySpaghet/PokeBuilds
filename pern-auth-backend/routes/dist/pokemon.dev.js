"use strict";

var router = require('express').Router();

var passport = require('../passport');

var pokemon = require('../controllers/pokemon');

router.post('/createpokemon', pokemon.create);
module.exports = router;