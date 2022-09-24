'use strict';

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize')} Sequelize
   */
  async up(queryInterface, Sequelize) {
    queryInterface.bulkDelete('habilidades', null);
    queryInterface.bulkInsert('habilidades', [
      {
        idHabilidade: 1,
        idInscricao: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('habilidades', null);
  },
};
