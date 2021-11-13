const express = require ("express");
const app = express();
const port = 8080;

//Fazendo uma requisição
app.get("/", function(req, res){
    res.send("Minha primeira requisição")
})

app.get("/seg-req", function(req, res){
    res.send("Minha SEGUNDA requisição!")
})

app.get("/com-parametros", function(req, res){
    
    res.send("Com parâmetros funciona! Sabadou, "+ req.query.nome)
})

app.listen(port, function (){
    console.log("Ouvindo a porta: ", port);
});



