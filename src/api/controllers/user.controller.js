const HttpStatus = require('http-status-codes');

class UserController {
  constructor({ UserService }) {
    this._userService = UserService;
  }

  async getUsers(req, res) {
    try {
      let users = await this._userService.getAll();
      if (!users) {
        return res.status(HttpStatus.NOT_FOUND).send({
          error: 'Not Found'
        });
      }

      return res.send({
        payload: users
      });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        error: error
      });
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
      if (!user) {
        return res.status(HttpStatus.NOT_FOUND).send({
          error: 'Not Found'
        });
      }

      return res.send({
        payload: user
      });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({});
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
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({});
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
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({});
    }
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(HttpStatus.PAYMENT_REQUIRED).send({
        message: 'id required'
      });
    }

    await this._userService.delete(id);
    return res.send({ message: 'user deleted' });
  }
}

module.exports = UserController;
