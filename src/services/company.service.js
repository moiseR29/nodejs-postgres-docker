const Service = require('./services');

class CompanyService extends Service {
  constructor({ CompanyRepository }) {
    super(CompanyRepository);
  }
}

module.exports = CompanyService;
