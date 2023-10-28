const Sequelize = require("sequelize");
const migrateAlertsToCdc = require("../scripts/migrateAlertsToCdc");

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn("Alert", "cdc_id", {
      type: Sequelize.UUID,
      allowNull: false,
      reference: {
        model: "ChartDatasetConfig",
        key: "id",
        onDelete: "cascade",
      },
    });

    migrateAlertsToCdc.up(queryInterface);
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("Alert", "cdc_id");
  }
};
