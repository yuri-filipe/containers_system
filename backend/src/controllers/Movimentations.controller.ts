import express from 'express'
import Movimentations from '../models/Movimentations.model'
const router = express.Router()


router.post("/register-movimentation", async (req, res) => {
    let { container_id, type, number, date_start, date_end } = req.body

    if (container_id && type && number && date_start && date_end) {
        try {

            const movimentation = await Movimentations.create({ container_id, type, number, date_start, date_end })

            if (movimentation) {
                res.status(200).json({
                    code: "success",
                    msg: "Movimentação criada com sucesso",
                    value: movimentation
                })
            } else {
                res.status(500).json({
                    code: "failed",
                    msg: "Falha ao criar movimentação, erro interno"
                })
            }
        } catch (error) {
            res.status(400).json({
                code: "failed",
                msg: "Falha ao criar movimentação, verifique os dados e tente novamente"
            })
        }
    } else {
        res.status(400).json({
            code: "failed",
            msg: "Falha ao criar movimentação, dados estão faltando"
        })
    }
})
router.post("/find-movimentations", async (req, res) => {
    let { number } = req.body

    if (number) {
        try {
            const client = await Movimentations.findAll({ where: { number } })

            if (client && client.length > 0) {
                res.status(200).json({
                    code: "success",
                    msg: "Movimentação encontrada com sucesso",
                    value: client[0]
                })
            } else {
                res.status(400).json({
                    code: "failed",
                    msg: "Movimentação não encontrado"
                })
            }
        } catch (error) {
            res.status(500).json({
                code: "failed",
                msg: "Falha ao encontrar movimentação, erro interno"
            })
        }
    } else {
        res.status(400).json({
            code: "failed",
            msg: "Falha ao encontrar movimentação, dados estão faltando"
        })
    }
})

export default router