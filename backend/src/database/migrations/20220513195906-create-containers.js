"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("containers", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "clients", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      client: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category: {
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
    queryInterface.dropTable("containers");
  },
};
