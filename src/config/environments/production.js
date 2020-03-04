module.exports = {
  PORT: process.env.PORT || 5000,
  DB: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
