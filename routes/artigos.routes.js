// rotas do sistema de artigos

/* GET: 
    _obter todos os artigos
    _obter um artigo específico
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

   /* router.get("/findByTitle", artigosController.findByTitle);

    router.get("/findById/", artigosController.findById);

    router.get("/published", artigosController.findAllPublished);

    router.put("/:id", artigosController.uptade);

    router.delete("/", artigosController.deleteAll);*/

    app.use("/artigos", router);
}
