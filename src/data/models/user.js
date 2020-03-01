'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      companyId: DataTypes.INTEGER,
      full_name: DataTypes.STRING,
      phone: DataTypes.STRING,
      age: DataTypes.INTEGER,
      email: DataTypes.STRING,
      position: DataTypes.STRING,
      address: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
