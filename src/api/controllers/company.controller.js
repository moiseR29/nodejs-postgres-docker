const HttpStatus = require('http-status-codes');
const { DataRequired, NotFoundError } = require('../../exceptions');
const { ValidationError } = require('sequelize');

class CompanyController {
  constructor({ CompanyService }) {
    this._companyService = CompanyService;
  }

  async getCompanies(req, res) {
    try {
      let companies = await this._companyService.getAll();

      return res.send({
        payload: companies
      });
    } catch (err) {
      if (err instanceof NotFoundError) {
        return res.status(HttpStatus.NOT_FOUND).send({
          error: err
        });
      } else {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
          error: err
        });
      }
    }
  }

  async getSortNameCompanies(req, res) {
    try {
      let companies = await this._companyService.getAllCompanySortName();

      return res.send({
        payload: companies
      });
    } catch (err) {
      if (err instanceof NotFoundError) {
        return res.status(HttpStatus.NOT_FOUND).send({
          error: err
        });
      } else {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
          error: err
        });
      }
    }
  }

  async getSortCreateAtCompanies(req, res) {
    try {
      let companies = await this._companyService.getAllCompanySortCreateDate();

      return res.send({
        payload: companies
      });
    } catch (err) {
      if (err instanceof NotFoundError) {
        return res.status(HttpStatus.NOT_FOUND).send({
          error: err.message
        });
      } else {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
          error: err.message
        });
      }
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

      return res.send({
        payload: company
      });
    } catch (err) {
      if (err instanceof NotFoundError) {
        return res.status(HttpStatus.NOT_FOUND).send({
          error: {
            message: 'name and legalname and email and address cannot be null'
          }
        });
      } else {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
          error: err
        });
      }
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
      if (err instanceof DataRequired) {
        return res.status(HttpStatus.BAD_REQUEST).send({
          error: err
        });
      } else if (err instanceof ValidationError) {
        return res.status(HttpStatus.BAD_REQUEST).send({
          error: err.message
        });
      } else {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
          error: err
        });
      }
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
      if (err instanceof NotFoundError) {
        return res.status(HttpStatus.NOT_FOUND).send({
          error: err
        });
      } else {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
          error: err
        });
      }
    }
  }

  async deleteCompany(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(HttpStatus.PAYMENT_REQUIRED).send({
        message: 'id required'
      });
    }

    try {
      await this._companyService.delete(id);
      return res.send({ message: 'company deleted' });
    } catch (err) {
      if (err instanceof NotFoundError) {
        return res.status(HttpStatus.NOT_FOUND).send({
          error: err
        });
      } else {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
          error: err
        });
      }
    }
  }
}

module.exports = CompanyController;
