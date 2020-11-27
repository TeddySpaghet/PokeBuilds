'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.team.hasMany(models.pokemon)
    }
  }
  team.init(
    {
      teamName: DataTypes.STRING,
      teamDescription: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'team',
    }
  )
  return team
}
