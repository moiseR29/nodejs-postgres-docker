const { Router } = require('express');

module.exports = function({ CompanyController }) {
  const router = Router();

  router.get('/', CompanyController.getCompanies.bind(CompanyController));
  router.get(
    '/sortname',
    CompanyController.getSortNameCompanies.bind(CompanyController)
  );
  router.get(
    '/sortcreateat',
    CompanyController.getSortCreateAtCompanies.bind(CompanyController)
  );
  router.get('/:id', CompanyController.getCompany.bind(CompanyController));
  router.post('/', CompanyController.createCompany.bind(CompanyController));
  router.put('/:id', CompanyController.updateCompany.bind(CompanyController));
  router.patch('/:id', CompanyController.updateCompany.bind(CompanyController));
  router.delete(
    '/:id',
    CompanyController.deleteCompany.bind(CompanyController)
  );
  return router;
};
