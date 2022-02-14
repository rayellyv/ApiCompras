// Aqui vamos fazer algumas alterações no express antes de executar o express
// importando o express(biblioteca)
const express = require("express")

// importando o consign
const consign = require("consign")

// importando o bodyparser
const bodyParser = require("body-parser")

// essa função vai criar a variável app, vai configurar a variável app e vai retornar a variável app
module.exports = () => {
    // executando o express
 const app = express()
  // adicionando a biblioteca para ser usada dentro do express. Urlencoded significa que pode receber dados por formulário. Passando extended: true por padrão para ele, antes vinha assim, agora a gente tem que passar.
  app.use(bodyParser.urlencoded({ extended: true }))
  // como a API não é só pra browser, não vamos enviar conteúdo apenas por um formulário, assim adicionamos a funcionalidade do json.
  app.use(bodyParser.json())

 // agora precisamos colocar a pasta de controllers e tudo que tem nela para que possa ser acessado pelo app
 consign()
 .include("controllers")
  .into(app)

  return app
}




