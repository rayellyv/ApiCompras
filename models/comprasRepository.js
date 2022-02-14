// aqui terá a conexão com o banco de dados e algumas validações de regra de negócios. Nosso Controller decidirá qual será a requisição que faremos.

const conexao = require('../infraestrutura/conexao')

class ComprasRepository {
    constructor(){}
    adiciona(atendimento, res) {

        const clienteEhValido = atendimento.cliente.length >=5

        const validacoes = [
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]  

        const sql = "INSERT INTO Atendimento SET ?"

        conexao.query(sql, atendimento, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    lista(res){
        const sql = "SELECT * FROM Atendimento"

        conexao.query(sql, (erro, resultados) => { 
            if(erro) {
                res.status(400).json(erro)
            } else { 
                res.status(200).json(resultados)
          }  
        })
    }

}

module.exports = new ComprasRepository()