module.exports = {
  PORT: process.env.PORTDEV,
  DB: {
    username: 'postgres',
    password: 'password',
    database: 'challenge_dev',
    host: 'localhost',
    dialect: 'postgres'
  }
};
