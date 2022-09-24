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
        id: 1,
        level: 'junior',
        name: 'javascript',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('habilidades', null);
  },
};
