"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var buildTeamObj = function buildTeamObj() {
  console.log(currentTeam);
  team.name = currentTeam.team.teamName;
  team.description = currentTeam.teamDescription;

  for (var i = 0; i < 6; i++) {
    team = _objectSpread({}, team, _defineProperty({}, "pokemon".concat(i), {
      name: currentTeam.pokemons[i].name
    }));

    for (var j = 0; j < 4; j++) {
      team["pokemon".concat(i)].moves = _objectSpread({}, team["pokemon".concat(i)].moves, _defineProperty({}, "move".concat(j), currentTeam.pokemons[i].move[j]));
    }
  }
};