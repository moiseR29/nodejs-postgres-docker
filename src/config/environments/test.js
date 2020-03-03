module.exports = {
  PORT: process.env.PORTQA,
  DB: {
    username: 'postgres',
    password: 'password',
    database: 'challenge_test',
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  }
};
