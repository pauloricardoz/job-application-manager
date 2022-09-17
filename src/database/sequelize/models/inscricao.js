const { sequelize, Sequelize } = require('.');
const Empresa = require('./empresa')

const Inscricao = sequelize.define(
  'inscricao',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    empresaId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'empresa_id'
    },
    dataInscricao: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'data_inscricao'
    },
    dataRetorno: {
      type: Sequelize.DATE,
      allowNull: true,
      field: 'data_retorno'
    },
    status: {
      type: Sequelize.STRING,
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
