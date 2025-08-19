import express from 'express' // Importando o módulo express
import profileRouter from './routes/profileRouter.js' // Importando o roteador de perfil
import productRouter from './routes/productRouter.js' // Importando o roteador de produto
import supplierRouter from './routes/supplierRouter.js' // Importando o roteador de fornecedor
import carRouter from './routes/carRouter.js' // Importando o roteador de carro

const app = express() // Criando uma instância do express
const port = 3000 // Definindo a porta do servidor

app.use(express.json()) // Middleware para converter JSON em um objeto no req.body

app.use('/profile', profileRouter) // Usando o roteador de perfil para rotas que começam com /profile
app.use('/product', productRouter) // Usando o roteador de produto para rotas que começam com /product
app.use('/supplier', supplierRouter) // Usando o roteador de fornecedor para rotas que começam com /supplier
app.use('/car', carRouter) // Usando o roteador de carro para rotas que começam com /car

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
