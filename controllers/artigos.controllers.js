//regras de negócios do sistema de artigos
const database = require("../models");
const tabelaArtigo = database.artigos;

//Cria um novo artigo

exports.create = (request, response) => {
    const artigo = {
        titulo: request.body.titulo
        descricao: request.body.descricao,
        publicado: request.body.publicado

    };
    // a promise podeser resolvida ou rejeitada (ocorrer um erro ao salvar).
    tabelaArtigo.create(artigo)
    .then(() => response.send("Artigo salvo com sucesso!"))
    .catch(() => response.status(500).send ("Ocorreu um erro ao salvar artigo."))

};