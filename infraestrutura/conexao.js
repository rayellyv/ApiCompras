// importando o mysql

const mysql2 = require("mysql2")

// configurações iniciais para fazer a conexão
const conexao = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Renatto17@',
    database: 'projeto_ray'
})

// exportando a conexão para que essa conexão possa ser usada por outros modulos
module.exports = conexao