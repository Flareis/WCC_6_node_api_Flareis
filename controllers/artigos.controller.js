//regras de negócios do sistema de artigos
const { request } = require("express");
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
    const users = User.findAll().then(function(data) {
        response.send(data)
    })
    .catch(function (){
        response.status(500).send("Ocorreu um erro obtendo os artigos")
    });
}