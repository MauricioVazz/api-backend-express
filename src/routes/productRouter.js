import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
    const dados = req.body
    res.json({
        message: 'Produto criado com sucesso',
        profile: dados
    })
})

router.get('/', (req, res) => {
    res.json({  message: 'Produtos retornado com sucesso' })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json({
        message: `Produto com ID ${id} retornado com sucesso`
    })
})

router.put('/', (req, res) => {
    const dados = req.body
    res.json({
        message: 'Produto atualizado com sucesso',
        profile: dados
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const dados = req.body
    res.json({
        message: `Produto com ID ${id} atualizado com sucesso`,
        profile: dados
    })
})

router.delete('/', (req, res) => {
    res.json({ message: 'Produto deletado com sucesso' })
})

export default router