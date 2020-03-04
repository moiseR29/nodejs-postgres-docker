const jwt = require('jsonwebtoken');
const HttpStatus = require('http-status-codes');

module.exports = (req, res, next) => {
  const { headers } = req;
  try {
    const token = headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userDate = decoded;
    next();
  } catch (error) {
    return res.status(HttpStatus.UNAUTHORIZED).send({
      message: 'Auth failed'
    });
  }
};
