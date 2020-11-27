"use strict";

var db = require('../models');

var create = function create(req, res) {
  console.log("let's go baby");
  var _req$body = req.body,
      teamName = _req$body.teamName,
      teamDescription = _req$body.teamDescription; // validate the POSTed data - making sure we have a name, an email, a p

  db.team.create({
    teamName: teamName,
    teamDescription: teamDescription
  }).then(function (newTeam) {
    console.log('New team created!');
    res.json(newTeam);
  });
};

module.exports = {
  create: create
};