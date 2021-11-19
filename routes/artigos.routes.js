// rotas do sistema de artigos

/* GET: 
    _obter todos os artigos
    _obter uma rtigo específico
    _obter todos os artigos publicados

POST: 
    _criar um novo artigo

PUT:
    _publicar meu artigo

DELETE: 
    _deletar meu artigo
*/

module.exports = (app) => {
    const artigosController = require("../controllers/artigos.controller.js")
    let router = require("express").Router();

    router.post("/", artigosController.create);
    router.get("/", artigosController.findAll);

    app.use("/artigos", router);
}
