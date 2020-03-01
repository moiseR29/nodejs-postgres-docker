const { asClass, createContainer, asFunction, asValue } = require('awilix');

// app start
const StartUp = require('./startup');
const Server = require('./server');
const config = require('../config/environments');

const db = require('../data/models');

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
  });

module.exports = container;
