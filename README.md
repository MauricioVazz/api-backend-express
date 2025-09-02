# Comandos

- npm init // Cria o packge.json para iniciar um projeto node
- npm i nome_pacote // instala um pacote especifico
- npm install ou npm i // instala  todos os pacotes do packge.json
- npm run nome_do_script // executa um script do package.json

# Topicos importantes

- O que é framework
- O que é JavaScript
- O que é NPM (Node Package Manager)
- O que é node.js
- O que é o Express
- Protocolo http
- Métodos http (GET, POST, PUT, PATCH, DELETE)
- Como mudar o formato de importação/exportação de require para import(Adicionar no package.json a propriedade type: "module")
-- watch (parametro para rodar um js em modo dev, que permite novamente o script quando algum arquivo é alterado)

Sintaxe basica de uma rota da API

app.post('/produto', (req, res) => {
  res.json({message: 'Criado com sucesso' })
})

- método criar ou inserir: post
- Rota ou endereço: /produto
- tipo de resposta: json

## Comandos do Prisma

- Instalação do Prisma
- npm i prisma - D
- npm i @prisma/client

- Gerar o model do prisma a partir de um BD existente
 - npx prisma db pull
- Gerar o BD apatir de um model do prisma
 -npx prisma db push
- Gerar os arquivos necessários para usar o prisma cliente no código