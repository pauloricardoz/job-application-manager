'use strict';

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize')} Sequelize
   */
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('inscricao_habilidades', {
      idInscricao: {
        type: Sequelize.INTEGER,
        field: 'id_inscricao',
        references: {
          key:'id',
          model: 'inscricoes'
        }
      },
      idHabilidade: {
        type: Sequelize.INTEGER,
        field: 'id_habilidade',
        references: {
          key:'id',
          model: 'habilidades'
        }
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('inscricao_habilidades')
  },
};
