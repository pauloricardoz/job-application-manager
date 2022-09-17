const {Sequelize} = require('sequelize');
const {development: { database, username, password, dialect}} = require('../config/config.json');

const sequelize = new Sequelize(database,username,password,{dialect});

module.exports = {sequelize, Sequelize};
