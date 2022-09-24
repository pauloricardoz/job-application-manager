const { STRING } = require('sequelize');
const { sequelize, Sequelize } = require('./indexSequelize');

const Habilidade = sequelize.define(
  'habilidade',
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: STRING,
    level: STRING,
  },
  {
    timestamps: false,
    tableName: 'habilidades',
  },
);


module.exports = Habilidade;
