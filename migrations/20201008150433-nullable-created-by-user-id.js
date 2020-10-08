'use strict';

module.exports = {
  up: async queryInterface => {
    await queryInterface.sequelize.query(`
      ALTER TABLE "Members" ALTER COLUMN "CreatedByUserId" DROP NOT NULL;
    `);
  },

  down: async queryInterface => {
    await queryInterface.sequelize.query(`
      ALTER TABLE "Members" ALTER COLUMN "CreatedByUserId" SET NOT NULL;
    `);
  },
};
