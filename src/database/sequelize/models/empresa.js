const {sequelize, Sequelize } = require('.');


const Empresa = sequelize.define('empresa', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  name: Sequelize.STRING
},
{
  timestamps: false
});

module.exports = Empresa;