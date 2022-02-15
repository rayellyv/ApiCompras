// aqui terá a conexão com o banco de dados e algumas validações de regra de negócios. Nosso Controller decidirá qual será a requisição que faremos.

const conexao = require('../infraestrutura/conexao')

class ComprasRepository {
    constructor(){}
    adiciona(Compras, res) {

        const clienteEhValido = Compras.cliente.length >=5

        const validacoes = [
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]  

        const sql = "INSERT INTO Compras SET ?"

        conexao.query(sql, Compras, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    lista(res){
        const sql = "SELECT * FROM Compras"

        conexao.query(sql, (erro, resultados) => { 
            if(erro) {
                res.status(400).json(erro)
            } else { 
                res.status(200).json(resultados)
          }  
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM Compras WHERE id = ?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({resultados})
            }
        })
    }
}

module.exports = new ComprasRepository()