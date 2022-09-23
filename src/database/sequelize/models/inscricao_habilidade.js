const { INTEGER } = require('sequelize');
const { sequelize, Sequelize } = require('.');

const inscricaoHabilidade = sequelize.define(
  'inscricaoHabilidade',
  {
    idInscricao: {
      type: INTEGER,
      field: 'id_inscricao',
      references: {
        key: 'id',
        model: 'inscricao',
      },
    },
    idHabilidade: {
      type: INTEGER,
      field: 'id_habilidade',
      references: {
        key: 'id',
        model: 'habilidade',
      },
    },
  },
  {
    timestamps: false,
    tableName: 'inscricao_habilidades',
  },
);

module.exports = inscricaoHabilidade;
