const Service = require('./services');
const { NotFoundError } = require('../exceptions');

class CompanyService extends Service {
  constructor({ CompanyRepository }) {
    super(CompanyRepository);
    this._companyRepository = CompanyRepository;
  }

  async getAllCompanySortName() {
    const companies = await this.getAll();
    if (!companies) throw new NotFoundError('not found');
    const sortCompanies = companies.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return sortCompanies;
  }

  async getAllCompanySortCreateDate() {
    const companies = await this._companyRepository.getAllDateSort();
    if (!companies) throw new NotFoundError('not found');
    return companies;
  }
}

module.exports = CompanyService;
