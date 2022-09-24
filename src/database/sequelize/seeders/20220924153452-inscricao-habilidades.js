'use strict';

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize')} Sequelize
   */
  async up(queryInterface, Sequelize) {
    console.log((await queryInterface.tab))
    return queryInterface.bulkInsert('inscricao_habilidades', [
      {
        id_habilidade: 1,
        id_inscricao: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('inscricao_habilidades', null, {});
  },
};
