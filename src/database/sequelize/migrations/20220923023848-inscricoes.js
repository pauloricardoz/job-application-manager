'use strict';

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize')} Sequelize
   */
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('inscricoes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      empresaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'empresa_id',
        references: {
          key: 'id',
          model: 'empresas',
        },
      },
      dataInscricao: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'data_inscricao',
      },
      dataRetorno: {
        type: Sequelize.DATE,
        allowNull: true,
        field: 'data_retorno',
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('inscricoes');
  },
};
