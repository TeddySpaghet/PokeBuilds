"use strict";

var db = require('../models');

var create = function create(req, res) {
  var _ref, name, move0, move1, move2, move3, teamName, pokemon, team;

  return regeneratorRuntime.async(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(req.body);

        case 3:
          _ref = _context.sent;
          name = _ref.name;
          move0 = _ref.move0;
          move1 = _ref.move1;
          move2 = _ref.move2;
          move3 = _ref.move3;
          teamName = _ref.teamName;
          _context.next = 12;
          return regeneratorRuntime.awrap(db.pokemon.create({
            name: name,
            move0: move0,
            move1: move1,
            move2: move2,
            move3: move3,
            teamName: teamName
          }));

        case 12:
          pokemon = _context.sent;
          _context.next = 15;
          return regeneratorRuntime.awrap(db.team.findOrCreate({
            where: {
              teamName: teamName
            },
            include: [db.pokemon]
          }));

        case 15:
          team = _context.sent;
          _context.next = 18;
          return regeneratorRuntime.awrap(team.addPokemon(pokemon));

        case 18:
          _context.next = 23;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 23:
          console.log("let's go baby"); // .then((newPokemon) => {
          //   // console.log(newPokemon)
          //   res.json(newPokemon)
          //   db.team.findOrCreate({ where: { teamName: teamName } }).then((team) => {
          //     team.addPokemon()
          //     console.log('*********THIS IS NEW POKEMON', newPokemon)
          //     // x.addPokemon(newPokemon)
          //   })
          // })

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 20]]);
}; // todo associate created pokemon with team
// db.team.find({ where: teamName }).then((foundTeam) => {
//   team.addPokemon()
// })


module.exports = {
  create: create
};