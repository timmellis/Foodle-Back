'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.addColumn(
      'posts','title', {
        type: Sequelize.STRING
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('posts','title')
  }
};
