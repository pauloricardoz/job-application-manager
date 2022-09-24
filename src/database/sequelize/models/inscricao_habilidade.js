const { sequelize, Sequelize } = require('./indexSequelize');
const { INTEGER } = Sequelize;

const InscricaoHabilidade = sequelize.define(
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

module.exports = InscricaoHabilidade;
