// exportar o customExpress
const customExpress = require("./config/customExpress")

//importando a nossa conexão
const conexao = require("./infraestrutura/conexao")


const Tabelas = require('./infraestrutura/tabelas')

// verificar se a conexão foi estabelecida, passamos uma função para quando ele executar o connect, ele devolver essa função.
conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
         Tabelas.init(conexao)
          // não entendi pq precisou colocar essa variável abaixo
        const app = customExpress()
          // subindo o app para o servidor que vai ser rodado numa porta(3000)
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})


// para rodar o servidor acima, escrevemos e executamos no terminal: node index.js


// acrescenta no script: "start": "node index.js", para que o nosso start no terminal seja npm start
// instala o nodemon(biblioteca do node), que serve para não ter que ficar derrubando o servidor
// sempre que precisar atualizar o terminal. 
// Para instalar usamos no terminal: npm install --save-dev nodemon
// No script agora em vez do start ser "node index.js", mudaremos para "nodemon index.js"
// apertar rs no terminal para restartar o servidor e a partir de agora é só salvar com ctrl + s que
// o start é realizado.

// instala o consign, o consign vai agrupar todas as rotas que a gente vai criando e coloca
// tudo dentro do nosso app

//importamos o modulo

// instalamos o bodyParser (biblioteca), pois ele vai converter as funções do corpo para
// algo que a gente consiga ler em javscript

// pronto agora a aplicação já ta pronta para receber dados tanto como formulário quanto como json