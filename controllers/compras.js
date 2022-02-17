// Aqui é o nosso controle de compras

const comprasRepository = require("../models/comprasRepository")


// usando uma requisição get para criar na rota / uma função. O get é para enviar dados para o usuário.
// o express devolve pra gente duas coisas: req e res. O req é o que a requisição(as pessoas) enviou pra
// gente e res é o que a gente tá devolvendo, o que a gente quer que seja renderizado na tela.
// colocamos na rota o nome "compras", para fazer sentido
// precisamos exportar a requisição abaixo, então usaremos module.exports e colocaremos a requisição dentro

module.exports = app => {
    app.get("/compras", (req, res) => {
        comprasRepository.lista(res)
    })

    //nova rota post (quando o usuário manda dados para o servidor)
    app.post("/compras", (req, res) => {
        const compra = req.body
        comprasRepository.adiciona(compra, res)
    })

    app.delete('/compras/:id', (req, res) => {
        const id = parseInt(req.params.id)

        comprasRepository.deleta(id, res)
    })
}

