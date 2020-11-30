'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.pokemon.belongsTo(models.team)
    }
  }
  pokemon.init(
    {
      name: DataTypes.STRING,
      move0: DataTypes.STRING,
      move1: DataTypes.STRING,
      move2: DataTypes.STRING,
      move3: DataTypes.STRING,
      teamId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'pokemon',
    }
  )
  return pokemon
}
