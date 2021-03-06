
module.exports = (sequelizeDataBase, Sequelize) => {
    const users = sequelizeDataBase.define("users", {
        identificacao: {
            type: Sequelize.STRING
        },
        nome: {
            type: Sequelize.STRING
        },
        area: {
            type: Sequelize.STRING
        }
    })
    return users;
} 