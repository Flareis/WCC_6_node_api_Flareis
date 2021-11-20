//regras de negócios do sistema de artigos
const { request, response } = require("express");
const { ReadyForQueryMessage } = require("pg-protocol/dist/messages");
const { users } = require("../models");
const database = require("../models");
const tabelaArtigo = database.artigos;

//Cria um novo artigo
exports.create = (request, response) => {
    const {titulo, descricao, publicado} = request.body;
    const artigo = {
        titulo, //variável com mesmo nome da propriedade
        descricao,
        publicado,
    };

    if (!artigo.titulo) {
        return response 
        .status(400)
        .send("O artigo precisa conter ao menos o título definido.");
    }
/* Desestruturação de objeto
const {titulo} = request.body*/


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
//buscando artigos publicados
exports.findAllPublished = (request, response) => {
    tabelaArtigo.findAll({where: {publicado:true} })
    .then(data => {
        response.send(data);
    })
    .catch((error) => {
        response.status(500).send("Ocorreu um erro ao encontrar os artigos publicados.");
    });
}

/*exports.update = (request, response) => {
    const { body: updates } = request;
    const { id: idArtigo } = request.params;
    const query = {where: {id: idArtigo }, returning: true };
/*o returning : true o sequelize  retorna uma lista  com duas coisas :
-quantidade de itens atualizados
-a lista de itens atualizados

    tabelaArtigo.update(updates, query)
    .then(function (data){
        const linhasAtualizadas = data[0];
        if (linhasAtualizadas === 0) {
            response
            .status(404)
            .send(
                "Não foi encontrado nenhum registro para ser atualizado a partir do id: " +
              idArtigo
            );
        } else {
            const artigosAtualizados = data[1];
            response.send(artigosAtualizados);
          }
        })
        .catch(function (error) {
          console.log(error);
          response.status(500).send("Ocorreu um erro ao atualizar o arquivo");
        });
    };


//Retorna artigo pela identificação
exports.findById = (request, reponse) => {
    const idArtigo = request.query.id;
    tabelaArtigo
    .findByPk(idArtigo )
    .then(function(data) {
    response.send(data);
       if(data){
           response.send(data);
        } else {
            response.status(404).send({
                message: "Não foi possível encontrar um usuário com o id: " + idArtigo,
            });
        }
    })
    .catch(function (error) {
        console.log(error);
        response.status(500).send({message: "Ocorreu um erro ao buscar o artigo com titulo: " + idArtigo,
        });
    });
};

//Deletando vários artigos
exports.deleteAll = (request, response) => {
    tabelaArtigo.destroy ( { where: {}, truncate: false } )
    .then(function(itensDeletados) {
        response.send("Foram deletados" + itensDeletados + "artigos");
    })
    .catch(function(error) {
        response.status(500).send("Ocorreu um erro ao deletar artigos")
    });
};

//Encontrar um artigo pelo nome

exports.findOne = (request, response) => {
    tabelaArtigo.findOne ({ where: {name: "XXX"}}), then(function (user){
        if(tabelaArtigo){
            response.send(tabelaArtigo);
        } else {
            response.status(404).send({
                message: "Não foi possível encontrar o artigo."
            });
        }
    }).catch(function () {
        response.status(500).send({
            message: "Erro ao obter o artigo."
        });
    });
}

exports.findByTitle = (request, response) => {
    tabelaArtigo.findOne({where: {titulo: request.query.titulo } })
    .then(function(data) {
        if(data) { 
            response.send(data);
        } else{
            response
            .status(404)
            .send(
                "Não foi possível encontrar um artigo com o título: ",
            request.query.titulo
            );
        }
    })
    .catch(function (error) {
        console.log(error);
        response.status(500).send("Ocorreu um erro ao buscar o artigo com título.");
    });
};*/