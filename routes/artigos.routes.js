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

    router.get("/published", artigosController.findAllPublished);

    router.get("/findByTitle", artigosController.findByTitle);

    router.get("/findById", artigosController.findById);

    router.put("/:id", artigosController.update);

    router.delete("/", artigosController.deleteAll);

    router.delete("/:id", artigosController.deleteOne);

    app.use("/artigos", router);
}
