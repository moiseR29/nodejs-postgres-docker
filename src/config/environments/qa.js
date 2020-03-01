module.exports = {
  PORT: process.env.PORTQA,
  DB: {
    username: "postgres",
    password: "password",
    database: "challenge_qa",
    host: "localhost",
    dialect: "postgres"
  }
};
