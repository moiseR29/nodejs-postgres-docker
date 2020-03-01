const HttpStatus = require('http-status-codes');

class CompanyController {
  constructor({ CompanyService }) {
    this._companyService = CompanyService;
  }

  async getCompanies(req, res) {
    try {
      let companies = await this._companyService.getAll();
      if (!companies) {
        return res.status(HttpStatus.NOT_FOUND).send({
          error: 'Not Found'
        });
      }

      return res.send({
        payload: companies
      });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({});
    }
  }

  async getCompany(req, res) {
    const { id } = req.params;
    if (!id) {
      return res
        .status(HttpStatus.PAYMENT_REQUIRED)
        .send({ message: 'id required' });
    }
    try {
      let company = await this._companyService.get(id);
      if (!company) {
        return res.status(HttpStatus.NOT_FOUND).send({
          error: 'Not Found'
        });
      }

      return res.send({
        payload: company
      });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({});
    }
  }

  async createCompany(req, res) {
    const { body } = req;
    if (!body) {
      return res
        .status(HttpStatus.PAYMENT_REQUIRED)
        .send({ message: 'body required' });
    }
    try {
      let createdCompany = await this._companyService.create(body);

      return res
        .status(HttpStatus.CREATED)
        .send({ message: 'Company created' });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({});
    }
  }

  async updateCompany(req, res) {
    const { body } = req;
    const { id } = req.params;

    if (!id || !body) {
      return res
        .status(HttpStatus.PAYMENT_REQUIRED)
        .send({ message: 'body and id required' });
    }

    try {
      await this._companyService.update(id, body);
      return res.send({ message: 'company updated' });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({});
    }
  }

  async deleteCompany(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(HttpStatus.PAYMENT_REQUIRED).send({
        message: 'id required'
      });
    }

    await this._companyService.delete(id);
    return res.send({ message: 'company deleted' });
  }
}

module.exports = CompanyController;
