const Service = require('./services');
const { DataRequired } = require('../exceptions');

class UserService extends Service {
  constructor({ UserRepository }) {
    super(UserRepository);
  }
}

module.exports = UserService;
