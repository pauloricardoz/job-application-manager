'use strict';

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize')} Sequelize
   */
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('habilidades', {
      id: { type: Sequelize.INTEGER, primaryKey: true },
      name: Sequelize.STRING,
      level: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('habilidades');
  },
};
