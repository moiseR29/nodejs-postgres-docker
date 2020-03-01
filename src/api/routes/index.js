const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

module.exports = function({ UserRoutes, CompanyRoutes }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(morgan('tiny'))
    .use(bodyParser.json());

  apiRoute.use('/user', UserRoutes);
  apiRoute.use('/company', CompanyRoutes);
  router.use('/api', apiRoute);

  return router;
};
