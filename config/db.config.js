// configuração do banco de dados

// credencial - string de concexão no banco

const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    connectionStringUrl: process.env.DB_CONECTION_STRING_URL,
    dialect: "postgres"
}