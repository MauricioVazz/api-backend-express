import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
    const dados = req.body
    res.json({
        message: 'Perfil criado com sucesso',
        profile: dados
    })
})

// Rota para retornar o perfil
router.get('/', (req, res) => {
    res.json({  message: 'Perfil retornado com sucesso' })
})

// Rota para retornar o perfil com ID
router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json({
        message: `Perfil com ID ${id} retornado com sucesso`
    })
})

router.put('/', (req, res) => {
    const dados = req.body
    res.json({
        message: 'Perfil atualizado com sucesso',
        profile: dados
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const dados = req.body
    res.json({
        message: `Perfil com ID ${id} atualizado com sucesso`,
        profile: dados
    })
})

router.delete('/', (req, res) => {
    res.json({ message: 'Perfil deletado com sucesso' })
})

export default router