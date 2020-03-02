const HttpStatus = require('http-status-codes');
const { DataRequired, NotFoundError } = require('../../exceptions');
const { ValidationError } = require('sequelize');

class UserController {
  constructor({ UserService }) {
    this._userService = UserService;
  }

  async getUsers(req, res) {
    try {
      let users = await this._userService.getAll();

      return res.send({
        payload: users
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

  async getUser(req, res) {
    const { id } = req.params;
    if (!id) {
      return res
        .status(HttpStatus.PAYMENT_REQUIRED)
        .send({ message: 'id required' });
    }
    try {
      let user = await this._userService.get(id);

      return res.send({
        payload: user
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

  async createUser(req, res) {
    const { body } = req;
    if (!body) {
      return res
        .status(HttpStatus.PAYMENT_REQUIRED)
        .send({ message: 'body required' });
    }

    try {
      let createdUser = await this._userService.create(body);

      return res.status(HttpStatus.CREATED).send({ message: 'User created' });
    } catch (err) {
      if (err instanceof DataRequired) {
        return res.status(HttpStatus.BAD_REQUEST).send({
          error: err
        });
      } else if (err instanceof ValidationError) {
        return res.status(HttpStatus.BAD_REQUEST).send({
          error: {
            message:
              'companyId and fullname and age and email and position cannot be null'
          }
        });
      } else {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
          error: err
        });
      }
    }
  }

  async updateUser(req, res) {
    const { body } = req;
    const { id } = req.params;

    if (!id || !body) {
      return res
        .status(HttpStatus.PAYMENT_REQUIRED)
        .send({ message: 'body and id required' });
    }

    try {
      await this._userService.update(id, body);
      return res.send({ message: 'user updated' });
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

  async deleteUser(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(HttpStatus.PAYMENT_REQUIRED).send({
        message: 'id required'
      });
    }

    try {
      await this._userService.delete(id);
      return res.send({ message: 'user deleted' });
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

module.exports = UserController;
