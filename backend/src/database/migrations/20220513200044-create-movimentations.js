"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("movimentations", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      container_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "containers", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_start: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_end: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("movimentations");
  },
};
