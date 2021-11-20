const { request } = require("express");
const database = require("../models");
const tabelaUsuario = database.users;

exports.findAll = (request, response) => {
    const users = 
    tabelaUsuario.findAll().then(function(data) {
        response.send(data)
    })
    .catch(function (){
        response.status(500).send("Ocorreu um erro obtendo os usuários.")
    });
}

/*Criar um novo usuário
const users = {
    identificacao: request.body.identificacao
    nome: request.body.nome
}*/