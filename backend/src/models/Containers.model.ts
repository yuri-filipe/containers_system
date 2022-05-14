import { DataTypes } from "sequelize"
import sequelize from "../database/Database"


const Containers = sequelize.define("containers", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "clients", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    client: {
        type: DataTypes.STRING,
        allowNull: false
    }, type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }

})


export default Containers
