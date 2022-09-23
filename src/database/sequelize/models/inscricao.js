const { INTEGER, DATE, STRING } = require('sequelize');
const { sequelize, Sequelize } = require('.');
const Empresa = require('./empresa')

const Inscricao = sequelize.define(
  'inscricao',
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    empresaId: {
      type: INTEGER,
      allowNull: false,
      field: 'empresa_id',
      references: {
        key: 'id',
        model: 'empresa'
      }
    },
    dataInscricao: {
      type: DATE,
      allowNull: false,
      field: 'data_inscricao'
    },
    dataRetorno: {
      type: DATE,
      allowNull: true,
      field: 'data_retorno'
    },
    status: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'inscricoes',
  },
);

Inscricao.belongsTo(Empresa, {
  as: 'empresa',
  foreignKey: 'empresaId'
});

module.exports = Inscricao;
