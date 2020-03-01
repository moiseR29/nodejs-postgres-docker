const Service = require('./services');

class UserService extends Service {
  constructor({ UserRepository }) {
    super(UserRepository);
  }
}

module.exports = UserService;
