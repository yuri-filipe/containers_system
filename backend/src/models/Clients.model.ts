import { DataTypes } from "sequelize"
import sequelize from "../database/Database"


const Clients = sequelize.define("clients", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
})


export default Clients
