'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    'Company',
    {
      name: DataTypes.STRING,
      legalName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING
    },
    {}
  );
  Company.associate = function(models) {
    Company.hasMany(models.User, {
      foreignKey: 'companyId'
    });
  };
  return Company;
};
