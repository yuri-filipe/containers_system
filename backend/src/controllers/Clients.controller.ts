import express from 'express'
import Clients from '../models/Clients.model'
const router = express.Router()


router.post("/register-client", async (req, res) => {
    let { name } = req.body

    if (name) {
        try {
            
            const client = await Clients.create({ name: name.toLowerCase() })

            if (client) {
                res.status(200).json({
                    code: "success",
                    msg: "Cliente criado com sucesso",
                    value: client
                })
            } else {
                res.status(500).json({
                    code: "failed",
                    msg: "Falha ao criar cliente, erro interno"
                })
            }
        } catch (error) {
            res.status(400).json({
                code: "failed",
                msg: "Falha ao criar cliente, verifique os dados e tente novamente"
            })
        }
    } else {
        res.status(400).json({
            code: "failed",
            msg: "Falha ao criar cliente, dados estão faltando"
        })
    }
})
router.post("/find-client", async (req, res) => {
    let { name } = req.body

    if (name) {
        try {
            const client = await Clients.findAll({ where: { name: name.toLowerCase() } })

            if (client && client.length > 0) {
                res.status(200).json({
                    code: "success",
                    msg: "Cliente encontrado com sucesso",
                    value: client[0]
                })
            } else {
                res.status(400).json({
                    code: "failed",
                    msg: "Cliente não encontrado"
                })
            }
        } catch (error) {
            res.status(500).json({
                code: "failed",
                msg:"Falha ao encontrar cliente, erro interno"
            })
        }
    } else {
        res.status(400).json({
            code: "failed",
            msg: "Falha ao encontrar cliente, dados estão faltando"
        })
    }
})
export default router