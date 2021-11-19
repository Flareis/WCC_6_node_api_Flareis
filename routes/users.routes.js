module.exports = (app) => {
    const usersController = require("../controllers/users.controller.js")
    let router = require("express").Router();

    router.get("/", usersController.findAll);

    app.use("/usuarios", router);
}
