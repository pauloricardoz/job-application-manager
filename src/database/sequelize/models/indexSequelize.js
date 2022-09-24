const { Sequelize } = require('sequelize');

const ENVIRONMENT = process.env.NODE_ENV || 'development';

const { database, username, password, dialect, host } =
  require('../config/config')[ENVIRONMENT];

console.log(database, username, password, dialect, host);

const sequelize = new Sequelize(database, username, password, {
  dialect,
  host,
});

module.exports = { sequelize, Sequelize };
