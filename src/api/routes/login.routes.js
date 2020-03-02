const { Router } = require('express');

module.exports = function({ LoginController }) {
  const router = Router();

  router.post('/', LoginController.postLogin.bind(LoginController));

  return router;
};
