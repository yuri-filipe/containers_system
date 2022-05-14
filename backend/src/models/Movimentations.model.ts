import { DataTypes } from "sequelize"
import sequelize from "../database/Database"


const Movimentations = sequelize.define("movimentations", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    container_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "containers", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_start: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_end: {
        type: DataTypes.STRING,
        allowNull: false
    },


})

export default Movimentations
