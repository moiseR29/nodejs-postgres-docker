module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        reference: {
          model: 'Companies',
          key: 'id'
        },
        allowNull: false
      },
      fullName: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please enter your fullName'
          }
        }
      },
      phone: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'please enter your age'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      position: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          msg: 'please enter your position'
        }
      },
      address: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
