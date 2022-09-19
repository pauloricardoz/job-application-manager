const { INTEGER } = require('sequelize');
const { sequelize, Sequelize } = require('.');

const inscricaoHabilidade = sequelize.define('inscricaoHabilidade', {
  idInscricao: {
    type: INTEGER,
    field: 'id_inscricao',
    primaryKey: true,
  },
  idHabilidade: {
    type: INTEGER,
    field: 'id_habilidade',
  },
},
{
  timestamps:false,
  tableName: 'inscricao_habilidades'
});

module.exports = inscricaoHabilidade;
