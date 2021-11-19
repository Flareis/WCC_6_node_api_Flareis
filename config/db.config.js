// configuração do banco de dados

// credencial - string de concexão no banco

const dotenv = require("dotenv"); //instalação de nova dependência, é possível acessar os dados, por meio da variável de ambiente criada.

dotenv.config();

module.exports = {
    connectionStringUrl: process.env.DB_CONNECTION_STRING_URL,
    dialect: "postgres"
};

//será usado no arquivo index.js do models para 