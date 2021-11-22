const { request, response } = require("express");
const database = require("../models");
const tabelaUsuario = database.users;

exports.findAll = (request, response) => {
    const Users = tabelaUsuario.findAll().then(function(data) {
        response.send("Tabela vazia.")
    })
    .catch(function (){
        response.status(500).send("Ocorreu um erro obtendo os usuários.")
    });
}

//Criar um novo usuário

exports.create = (request,response) => {
    const users = {
        identificacao: request.body.identificacao,
        nome: request.body.nome,
        area: request.body.area
    };
    tabelaUsuario.create(users)
    .then(() => response.send("Usuário salvo com sucesso!"))
    .catch ((error) => {
        //console.log(error);
        response.status(500).send ("Ocorreu um erro ao salvar usuário.");
    })
};

/*const users = {
    identificacao: request.body.identificacao
    nome: request.body.nome
}*/