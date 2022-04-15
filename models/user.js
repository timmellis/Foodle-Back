'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fullname: DataTypes.STRING,
    profileImg: DataTypes.STRING,
    profileDescription: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};