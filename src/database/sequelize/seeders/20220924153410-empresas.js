'use strict';

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize')} Sequelize
   */
  async up(queryInterface, Sequelize) {
    queryInterface.bulkDelete('empresas', null);
    queryInterface.bulkInsert('empresas', [
      {
        id: 1,
        name: 'Trybe',
      },
      {
        id: 2,
        name: 'SAMBATECH',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('empresas', null);
  },
};
