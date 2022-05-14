import express from 'express'
import cors from "cors"
import Clients from './controllers/Clients.controller'
import Containers from './controllers/Containers.controller'
import Movimentations from './controllers/Movimentations.controller'
import Relatories from './controllers/Relatories.controller'

class Server {
    #app = express()
    #port = 3333

    constructor() {
        this.#app.use(cors())
        this.#app.use(express.json())
        this.#app.use(express.urlencoded({ extended: true }))

        this.#app.use("/api/v1/clients", Clients)

        this.#app.use("/api/v1/containers", Containers)

        this.#app.use("/api/v1/movimentations", Movimentations)

        this.#app.use("/api/v1/relatories", Relatories)


        this.#app.listen(this.#port, () => console.log(`Server is running ${this.#port}`))

    }

}

const server = new Server()