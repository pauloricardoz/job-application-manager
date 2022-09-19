const { STRING } = require('sequelize');
const {sequelize, Sequelize } = require('.');


const Empresa = sequelize.define('empresa', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  name: STRING
},
{
  timestamps: false
});

module.exports = Empresa;