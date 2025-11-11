import { remove } from "../../models/profileModel.js"

export const deleteProfileController = async (req, res) => {
  const id = req.params.id

  if (req.userLogged.id !== +id) {
    return res.status(403).json({ message: 'Você não tem permissão para editar este perfil.' })
  }

  const result = await remove(+id)

  res.json({
    message: `Usuário com ID ${id} deletado com sucesso!`,
    profile: result
  })
}
