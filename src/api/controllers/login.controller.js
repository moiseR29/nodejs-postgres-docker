const HttpStatus = require('http-status-codes');
const UserLogin = require('../middleware/model/user.login');
const jwt = require('jsonwebtoken');

class LoginController {
  postLogin(req, res) {
    const { body } = req;
    const userLogin = new UserLogin(body.username, body.password);
    if (userLogin.validateLogin()) {
      const token = jwt.sign(
        { username: body.username, userId: 1 },
        process.env.JWT_KEY,
        { expiresIn: '1h' }
      );
      return res.status(HttpStatus.OK).send({
        message: 'Auth successful',
        token
      });
    } else {
      return res.status(HttpStatus.UNAUTHORIZED).send({
        message: 'Auth failed'
      });
    }
  }
}

module.exports = LoginController;
