const dataBaseConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelizeOptions = {dialect: dataBaseConfig.dialect};
const sequelizeDataBase = new Sequelize(dataBaseConfig.connectionStringUrl, sequelizeOptions);

const dataBase = {
    Sequelize = Sequelize,
    sequelizeDataBase: sequelizeDataBase
};

database.artigos = require("./artigos.model.js")
database.artigos = artigosModel(sequelizeDataBase, Sequelize);


module.exports = database;