'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.createTable('pokemons', {
              id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
              },
              name: {
                type: Sequelize.STRING
              },
              move0: {
                type: Sequelize.STRING
              },
              move1: {
                type: Sequelize.STRING
              },
              move2: {
                type: Sequelize.STRING
              },
              move3: {
                type: Sequelize.STRING
              },
              teamName: {
                type: Sequelize.STRING
              },
              createdAt: {
                allowNull: false,
                type: Sequelize.DATE
              },
              updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
              },
              teamId: {
                type: Sequelize.INTEGER,
                // or choose what you want
                // allowNull: false,
                onDelete: 'CASCADE' // or choose what you want to do

              }
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function down$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(queryInterface.dropTable('pokemons'));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};