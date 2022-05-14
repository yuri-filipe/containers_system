import express from 'express'
import Containers from '../models/Containers.model'
const router = express.Router()

router.post("/register-container", async (req, res) => {
    let { client, client_id, number, type, status, category } = req.body
    

    if (client && client_id && number && type && status && category) {
        try {

            const container = await Containers.create({ client:client.toLowerCase(), client_id, number, type, status, category  })

            if (container) {
                res.status(200).json({
                    code: "success",
                    msg: "Container criado com sucesso",
                    value: container
                })
            } else {
                res.status(500).json({
                    code: "failed",
                    msg: "Falha ao criar container, erro interno"
                })
            }
        } catch (error) {
            res.status(400).json({
                code: "failed",
                msg: "Falha ao criar container, verifique os dados e tente novamente"
            })
        }
    } else {
        res.status(400).json({
            code: "failed",
            msg: "Falha ao criar container, dados estão faltando"
        })
    }
})
router.post("/find-container", async (req, res) => {
    let { number } = req.body

    if (number) {
        try {
            const container = await Containers.findAll({ where: { number} })

            if (container && container.length > 0) {
                res.status(200).json({
                    code: "success",
                    msg: "Container encontrado com sucesso",
                    value: container[0]
                })
            } else {
                res.status(400).json({
                    code: "failed",
                    msg: "Container não encontrado"
                })
            }
        } catch (error) {
            res.status(500).json({
                code: "failed",
                msg: "Falha ao encontrar container, erro interno"
            })
        }
    } else {
        res.status(400).json({
            code: "failed",
            msg: "Falha ao encontrar container, dados estão faltando"
        })
    }
})
export default router