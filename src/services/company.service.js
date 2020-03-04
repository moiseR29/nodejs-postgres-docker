const Service = require('./services');
const { NotFoundError } = require('../exceptions');
const dateFormat = require('dateformat');

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

  async getAllCompanyFilterCreateDate(date) {
    const companies = await this.getAll();
    if (!companies) throw new NotFoundError('not found');

    const companiesFilter = companies.filter(
      item => this.format(item.createAt) === date
    );

    if (companiesFilter.length < 1) throw new NotFoundError('not found');
    return companiesFilter;
  }

  format(date) {
    return dateFormat(date, 'isoDate');
  }
}

module.exports = CompanyService;
