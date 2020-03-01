class Repository = require('./repository');

class UserRepository extends Repository {
   constructor({db}) {
      super(db, 'User');
   }
}

module.exports = UserRepository;