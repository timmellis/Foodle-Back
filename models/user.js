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
      // FOLLOWER / FOLLOWING ASSOCIATION (THROUGH JOIN TABLE)
      // MANY-MANY-SELF
      User.belongsToMany(models.User, {
        as: 'followers',
        through: models.UserFollower,
        foreignKey: 'userId'
      }),
      User.belongsToMany(models.User, {
        as: 'following',
        through: models.UserFollower,
        foreignKey: 'followerId'
      }),

      // POSTS ASSOCIATION : HAS-MANY
      User.hasMany(models.Post, {
        foreignKey: 'userId'
      }),

      // COMMENTS ASSOCIATION : HAS-MANY
      User.hasMany(models.Comment, {
        foreignKey: 'userId'
      })
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