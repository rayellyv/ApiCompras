# API COMPRAS - CEO GENERATION

Esse projeto é uma API de lista de compras que permite cadastrar, listar e deletar itens de compras. Funcionando não só no browser mas também em outros servidores.


## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.


### 📋 Pré-requisitos

É necessário a instalação do Visual Studio Code, NODEjs, MySQL e Postman

Visual Studio Code para criar o código
Nodejs para rodar o código Javascript no backend
MySQL para guardar os dados no banco de dados
Postman para fazer os testes da API


## ⚙️ Executando os testes

No Postman, com as rotas get, post e delete é possível listar compra, adicionar compra (com os dados do cliente, setor da compra, item e status) e deletar compra.


## 📦 Desenvolvimento


Nessa API temos os seguintes módulos e arquivos:

- O arquivo index.js coloca nossa API para rodar no servidor.

- A pasta config = com o arquivo customExpress.js, no qual vamos fazer algumas alterações no express antes de executá-lo, importar as bibliotecas utilizadas e criar uma função que vai criar a variável app, vai configurar a variável app e vai retornar a variável app.

- A pasta controllers = com o arquivo compras.js que é o nosso controle de compras. Nele temos nossas rotas de requisições e a exportação dessas rotas. Aqui ficam decididas as rotas que faremos.

- A pasta de infraestrutura possui dois arquivos = o arquivo de conexao.js que vai importar o MySQL, fazer as configurações iniciais e exportar para que o banco de dados seja usado em outros módulos. Já o arquivo tabelas.js será responsável pela criação da tabela e dos dados que serão alocados.

- A pasta models = com o arquivo comprasRepository.js, no qual será estabelecida a conexão com o banco de dados, algumas validações de regras de negócios e a exportação da função para ser utilizada em outros módulos.


## 🛠️ Construído com a instalação das seguintes dependências e versões:

### Dependências de produção:

"body-parser": "^1.19.1"
"consign": "^0.1.6"
"express": "^4.17.2"
"mysql": "^2.18.1"
"mysql2": "^2.3.3"
"save-dev": "^0.0.1-security"

### Dependências de desenvolvimento:

"nodemon": "^2.0.15"


## ✒️ Autor

Rayelly Karine Vasconcelos da Silva (https://github.com/rayellyv)

## 🎁 Expressões de gratidão

* Agradeço a toda a squad Sharknado, em especial ao Maik, Rafael e Henrique,
  pela realização do meu primeiro projeto de API.