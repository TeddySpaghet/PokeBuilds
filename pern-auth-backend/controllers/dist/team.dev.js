"use strict";

var db = require('../models');

var chalk = require('chalk');

var index = function index(req, res) {
  db.team.findAll({
    include: db.pokemon
  }).then(function (foundTeams) {
    if (!foundTeams) return res.json({
      message: 'No Teams found in database.'
    }); // respond with a JSON-ified object of users

    res.json({
      teams: foundTeams
    });
  })["catch"](function (err) {
    return console.log('Error at teams#index', err);
  });
};

var show = function show(req, res) {
  db.team.findByPk(req.params.id, {
    include: db.pokemon
  }).then(function (foundTeam) {
    if (!foundTeam) return res.json({
      message: 'Team with provided ID not found.'
    });
    res.json({
      team: foundTeam
    });
  })["catch"](function (err) {
    return console.log('Error at teams#index', err);
  });
};

var create = function create(req, res) {
  var _req$body, teamName, teamDescription, team, preexistingTeam, createdTeam, i, createdPokemon;

  return regeneratorRuntime.async(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, teamName = _req$body.teamName, teamDescription = _req$body.teamDescription, team = _req$body.team;
          _context.next = 3;
          return regeneratorRuntime.awrap(db.team.findOne({
            where: {
              teamName: teamName
            }
          }));

        case 3:
          preexistingTeam = _context.sent;

          if (!preexistingTeam) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.json({
            message: 'A team with that name already exists'
          }));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(db.team.create({
            teamName: teamName,
            teamDescription: teamDescription
          }));

        case 8:
          createdTeam = _context.sent;
          _context.t0 = regeneratorRuntime.keys(team);

        case 10:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 17;
            break;
          }

          i = _context.t1.value;
          _context.next = 14;
          return regeneratorRuntime.awrap(db.pokemon.create({
            name: team[i].name,
            move0: team[i].moves.move0,
            move1: team[i].moves.move1,
            move2: team[i].moves.move2,
            move3: team[i].moves.move3,
            teamId: createdTeam.id
          }));

        case 14:
          createdPokemon = _context.sent;
          _context.next = 10;
          break;

        case 17:
          _context.next = 19;
          return regeneratorRuntime.awrap(console.log('New team created!'));

        case 19:
        case "end":
          return _context.stop();
      }
    }
  });
};

var update = function update(req, res) {
  // make the update route
  db.team.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(function (updatedTeam) {
    // Validations and error handling here
    res.json({
      game: updatedTeam
    });
  })["catch"](function (err) {
    return console.log('Error at teams#index', err);
  });
};

module.exports = {
  create: create,
  index: index,
  show: show,
  update: update
};