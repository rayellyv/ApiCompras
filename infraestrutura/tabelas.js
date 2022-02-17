class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarCompras()
    }

    criarCompras() {

        const sql = "CREATE TABLE IF NOT EXISTS Compras (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL,  lista varchar(20), item varchar(20) NOT NULL, status varchar(20) NOT NULL, PRIMARY KEY(id))"

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Compras criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas