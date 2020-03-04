'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    'Company',
    {
      name: {
        type: DataTypes.STRING(60),
        allowNull: false
      },
      legalName: {
        type: DataTypes.STRING(60),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
      },
      phone: DataTypes.STRING(30),
      address: {
        type: DataTypes.STRING(60),
        allowNull: false
      }
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
