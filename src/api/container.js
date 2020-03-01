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

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
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
  });

module.exports = container;
