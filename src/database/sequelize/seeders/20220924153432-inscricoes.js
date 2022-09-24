'use strict';

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize')} Sequelize
   */
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('inscricoes', [
      {
        id: 1,
        data_inscricao: new Date('2022-03-05T00:00:00.000Z'),
        data_retorno: null,
        empresa_id: 1,
        status: 'aplicado',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('inscricoes', null, {});
  },
};
