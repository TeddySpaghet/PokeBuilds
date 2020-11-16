'use strict';

const gameData = require('../gameData.json')

let games = gameData.games
//add the createdAt and updatedAt properties
games = games.map(game=> {
  game.createdAt = new Date()
  game.updatedAt = new Date()
  return game
})
console.log(games)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('games', games, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * */
     await queryInterface.bulkDelete('games', null, {});
  }
};
