const { DataTypes } = require('sequelize')

const UserModel = (sequelize) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, //NOT NULL
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    userPw: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  })
  return User
}

module.exports = UserModel
