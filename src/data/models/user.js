'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fullName: {
        type: DataTypes.STRING(60),
        allowNull: false
      },
      phone: DataTypes.STRING(20),
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        min: 18,
        max: 100
      },
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
      },
      position: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      address: DataTypes.STRING(60)
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
