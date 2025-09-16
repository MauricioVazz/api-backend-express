import express from 'express' // Importando o módulo express
import profileRouter from './routers/profileRouter.js' // Corrigido: Importando o roteador de perfil
import productRouter from './routers/productRouter.js' // Importando o roteador de produto
import supplierRouter from './routers/supplierRouter.js' // Importando o roteador de fornecedor
import carRouter from './routers/carRouter.js' // Importando o roteador de carro
import cors from 'cors'
import { logger } from './middleware/logger.js'

const app = express() // Criando uma instância do express
const port = 3000 // Definindo a porta do servidor

app.use(logger)
app.use(cors()) // Habilitando CORS para todas as rotas
app.use(express.json()) // Middleware para converter JSON em um objeto no req.body

app.use('/profile', profileRouter) // Usando o roteador de perfil para rotas que começam com /profile
app.use('/product', productRouter) // Usando o roteador de produto para rotas que começam com /product
app.use('/supplier', supplierRouter) // Usando o roteador de fornecedor para rotas que começam com /supplier
app.use('/car', carRouter) // Usando o roteador de carro para rotas que começam com /car

app.listen(port, () => {
    console.log(`API Rodando em http://localhost:${port}`)
})