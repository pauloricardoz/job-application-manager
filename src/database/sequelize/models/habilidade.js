const { sequelize, Sequelize } = require('.');

const Habilidade = sequelize.define(
  'habilidade',
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: Sequelize.STRING,
    level: Sequelize.STRING,
  },
  {
    timestamps: false,
    tableName: 'habilidades',
  },
);


module.exports = Habilidade;
