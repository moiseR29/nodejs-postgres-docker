const { Router } = require('express');
const checkAuth = require('../middleware/check-auth');

module.exports = function({ UserController }) {
  const router = Router();

  router.get('/', checkAuth, UserController.getUsers.bind(UserController));
  router.get('/:id', checkAuth, UserController.getUser.bind(UserController));
  router.post('/', checkAuth, UserController.createUser.bind(UserController));
  router.put('/:id', checkAuth, UserController.updateUser.bind(UserController));
  router.patch(
    '/:id',
    checkAuth,
    UserController.updateUser.bind(UserController)
  );
  router.delete(
    '/:id',
    checkAuth,
    UserController.deleteUser.bind(UserController)
  );

  return router;
};
