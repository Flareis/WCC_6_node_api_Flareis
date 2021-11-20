//regras de negócios do sistema de artigos
const { request, response } = require("express");
const { users } = require("../models");
const database = require("../models");
const tabelaArtigo = database.artigos;

//Cria um novo artigo
exports.create = (request, response) => {
    const artigo = {
        titulo: request.body.titulo,
        descricao: request.body.descricao,
        publicado: request.body.publicado

    };
    // a promise pode ser resolvida ou rejeitada (ocorrer um erro ao salvar).
    tabelaArtigo.create(artigo)
    .then(() => response.send("Artigo salvo com sucesso!"))
    .catch((error) => {
        console.log(error);
        response.status(500).send ("Ocorreu um erro ao salvar artigo.");
    })
};

exports.findAll = (request, response) => {
    const articles = tabelaArtigo.findAll().then(function(data) {
        response.send(data)
    })
    .catch(function (){
        response.status(500).send("Ocorreu um erro obtendo os artigos")
    });
}

//Retorna artigo pela identificação
exports.findByPk = (request, reponse) => {
    const article = tabelaArtigo.findByPk(request.params.id).then(function(article){
    response.send("olá");/*
       if(artId){
            response.send(artId);
        } else {
            response.status(404).send({
                message: "Não foi possível encontrar um usuário com o id: " // + request.query(123)
            });
        }*/
    }).catch(function (error) {
        response.status(500).send({
            message: "Erro obtendo artigo id=" + request.params.id
        });
    });
};