import { create } from '../../models/productModel.js'

export const createProductController = async (req, res) => {

  const product = req.body

  console.log('ID do usuário logado:', req.userLogged.id);
  console.log('Email do usuário logado:', req.userLogged.email);

  const dados = await create(product)
  res.json({
    message: 'Produto criado com sucesso!',
    product: dados
  })
}

