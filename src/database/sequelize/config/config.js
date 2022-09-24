require('dotenv/config');

const {
  DB_HOST: host,
  DB_PORT: dbPort,
  DB_USER: username,
  DB_PASSWORD: password,
  DB_DATA_BASE: database,
  DIALECT: dialect = 'mysql',
} = process.env;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect,
  },
  test: {
    username,
    password,
    database: database + '-test',
    host,
    dialect,
  },
  production: {
    username,
    password,
    database: database + '-prod',
    host,
    dialect,
  },
};
