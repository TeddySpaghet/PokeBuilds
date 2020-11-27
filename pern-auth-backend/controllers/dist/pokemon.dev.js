"use strict";

var db = require('../models');

var create = function create(req, res) {
  console.log("let's go baby");
  var _req$body = req.body,
      teamName = _req$body.teamName,
      teamDescription = _req$body.teamDescription; // validate the POSTed data - making sure we have a name, an email, a p

  db.pokemon.create({
    name: name,
    move0: move0,
    move1: move1,
    move2: move2,
    move3: move3
  }).then(function (newPokemon) {
    console.log('New pokemon created!');
    res.json(newPokemon);
  });
};

module.exports = {
  create: create
};