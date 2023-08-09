const visitor = function (sequelize, DataTypes) {
  const model = sequelize.define(
    'visitor',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.STRING('medium'),
      },
    },
    {
      tableName: 'visitor',
      freezeTablename: true,
    }
  )
  return model
}

module.exports = visitor
