
import { Sequelize } from 'sequelize'
import { config } from 'dotenv';


config()

const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const dialect = process.env.DB_DIALECT;


const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: "mysql",
    define: {
        timestamps: true,
        underscored: true
    }
})


setTimeout(() => {
    const { clients, containers, movimentations } = sequelize.models

    clients.hasMany(containers, { foreignKey: "client_id", as: "containers" })
    containers.belongsTo(clients, { foreignKey: "client_id", as: "containers" })

    containers.hasMany(movimentations, { foreignKey: "container_id", as: "movimentations" })
    movimentations.belongsTo(containers, { foreignKey: "container_id", as: "movimentations" })

}, 2000);


export default sequelize