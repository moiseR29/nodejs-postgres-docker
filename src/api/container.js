const { asClass, createContainer, asFunction, asValue } = require('awilix');

// app
const StartUp = require('./startup');
const Server = require('./server');
const config = require('../config/environments');

// db
const db = require('../data/models');

// repositories
const { CompanyRepository, UserRepository } = require('../data/repositories');

// services
const { CompanyService, UserService } = require('../services');

// routes
const Routes = require('../api/routes');
const UserRoutes = require('../api/routes/user.routes');
const CompanyRoutes = require('../api/routes/company.routes');

// controllers
const { CompanyController, UserController } = require('../api/controllers');

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton()
  })
  .register({
    config: asValue(config)
  })
  .register({
    db: asValue(db)
  })
  .register({
    CompanyRepository: asClass(CompanyRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton()
  })
  .register({
    CompanyService: asClass(CompanyService).singleton(),
    UserService: asClass(UserService).singleton()
  })
  .register({
    UserRoutes: asClass(UserRoutes).singleton(),
    CompanyRoutes: asClass(CompanyRoutes).singleton()
  })
  .register({
    UserController: asClass(UserController).singleton(),
    CompanyController: asClass(CompanyController).singleton()
  });

module.exports = container;
