const { Router } = require('express');
const checkAuth = require('../middleware/check-auth');

module.exports = function({ CompanyController }) {
  const router = Router();

  router.get(
    '/',
    checkAuth,
    CompanyController.getCompanies.bind(CompanyController)
  );
  router.get(
    '/sortname',
    checkAuth,
    CompanyController.getSortNameCompanies.bind(CompanyController)
  );
  router.get(
    '/createat',
    checkAuth,
    CompanyController.getFilterCreateAtCompanies.bind(CompanyController)
  );
  router.get(
    '/:id',
    checkAuth,
    CompanyController.getCompany.bind(CompanyController)
  );
  router.post(
    '/',
    checkAuth,
    CompanyController.createCompany.bind(CompanyController)
  );
  router.put(
    '/:id',
    checkAuth,
    CompanyController.updateCompany.bind(CompanyController)
  );
  router.patch(
    '/:id',
    checkAuth,
    CompanyController.updateCompany.bind(CompanyController)
  );
  router.delete(
    '/:id',
    checkAuth,
    CompanyController.deleteCompany.bind(CompanyController)
  );

  return router;
};
