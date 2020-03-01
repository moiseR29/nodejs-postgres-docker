const Repository = require('./repository');

class CompanyRepository extends Repository {
  constructor({ db }) {
    super(db, 'Company');
  }
}

module.exports = CompanyRepository;
