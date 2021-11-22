module.exports = (app) => {
    const usersController = require("../controllers/users.controller.js")
    let router = require("express").Router();

    router.get("/", usersController.findAll);

    router.post("/", usersController.create);

    app.use("/usuarios", router);
}
