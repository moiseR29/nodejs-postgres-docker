module.exports = {
  PORT: process.env.PORT,
  DB: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    dialect: "postgres"
  }
};
