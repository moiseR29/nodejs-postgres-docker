const Service = require('./services');

class CompanyService extends Service {
  constructor({ CompanyRepository }) {
    super(CompanyRepository);
  }

  async getAllCompanySortName() {
    const companies = await this.getAll();
    const sortCompanies = companies.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return sortCompanies;
  }
}

module.exports = CompanyService;
