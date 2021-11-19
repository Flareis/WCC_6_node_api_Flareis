const dataBaseConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelizeOptions = {dialect: dataBaseConfig.dialect};
const sequelizeDataBase = new Sequelize(dataBaseConfig.connectionStringUrl, sequelizeOptions);

const database = {
    Sequelize: Sequelize,
    sequelizeDataBase: sequelizeDataBase
};

const artigosModel = require("./artigos.model.js")
database.artigos = artigosModel(sequelizeDataBase, Sequelize);

const usersModel = require("./users.model.js")
database.users = usersModel(sequelizeDataBase, Sequelize);

module.exports = database;
