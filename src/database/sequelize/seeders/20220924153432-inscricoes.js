'use strict';

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize')} Sequelize
   */
  async up(queryInterface, Sequelize) {
    queryInterface.bulkDelete('inscricoes', null);
    queryInterface.bulkInsert('inscricoes', [
      {
        id: 1,
        dataInscricao: '2022-03-05T00:00:00.000Z',
        dataRetorno: null,
        empresaId: 1,
        status: 'aplicado',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('inscricoes', null);
  },
};
