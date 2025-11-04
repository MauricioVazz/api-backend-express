import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { getByEmail } from '../../models/profileModel.js'

export const loginController = async (req, res) => {
    // receber o email e a senha do corpo da requisição
    const { email, pass } = req.body

    // comparar se o email e a senha estão corretos com o banco
    const user = await getByEmail(email)
    if (!user) {
        console.error('Usuário não encontrado para o email:', email)
        return res.status(401).json({ message: 'Email ou Senha Inválida (email nao encontrado)' })
    }

    const passOk = await bcrypt.compare(pass, user.pass)
    if (!passOk) {
        console.error('Senha inválida para o usuario:', email)
        return res.status(401).json({ message: 'Email ou Senha Inválida (senha inválida)' })
    }

    // se estiverem corretos, gerar um token (JWT)
    const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET, {expiresIn: '1d'})

    if (!token) {
        return res.status(500).json({ message: 'Erro ao gerar o token de acesso' })
    }

    // enviar o token como resposta para o cliente
        return res.status(200).json({
            profile: {
                id: user.id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
            },
            token            
        })
}