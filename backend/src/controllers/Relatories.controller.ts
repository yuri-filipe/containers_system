import express from "express";
import Clients from '../models/Clients.model'
import Containers from '../models/Containers.model'
const router = express.Router()

router.post("/generate-relatories-total", async (req, res) => {
    try {
        const relatories = await Clients.findAll({
            include: [{ model: Containers, as: "containers", include: ["movimentations"] }]
        })

        if (relatories && relatories.length > 0) {
            return res.status(200).json({
                code: "success",
                msg: "Relatórios encontrados com sucesso",
                value: relatories
            })
        }
        else {
            return res.status(200).json({
                code: "success",
                msg: "Sem dados conforme os paramêtros inseridos",
                value: []
            })
        }
    }
    catch (error) {
        return res.status(500).json({
            code: "failed",
            msg: "Falha ao gerar relatórios, erro interno do servidor"
        })
    }

});
router.post("/generate-relatories-client", async (req, res) => {
    const { client_id, category } = req.body

    if (client_id && category) {
        try {
            const relatories = await Clients.findByPk(client_id, {
                include: [{ model: Containers, where: { category }, as: "containers", include: ["movimentations"] }]
            })
            

            if (relatories) {
                return res.status(200).json({
                    code: "success",
                    msg: "Relatórios gerados com sucesso",
                    value: relatories
                })
            }
            else {
                return res.status(200).json({
                    code: "success",
                    msg: "Sem dados conforme os paramêtros inseridos",
                    value: []
                })
            }
        }
        catch (error) {
            return res.status(500).json({
                code: "failed",
                msg: "Falha ao consultaro banco de dados, erro interno do servidor"
            })
        }
    }
    else {
        return res.status(400).json({
            code: "failed",
            msg: "Falha ao gerar relatorio, dados estão faltando"
        })
    }

});



export default router;