const express = require('express') //usa a biblioteca express pra criar a api
const app = express() //instancia do express para gerar uma aplicacao
const bodyParser = require('body-parser') //trabalhar com json que é o formato padrao que uma api rest aceita
const config = require('config') //consumir os dados do arquivo de config default.json
app.use(bodyParser.json()) //servir como plugin pro nosso app

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador) //declarando primeira requisicao, consumir rota dentro do arquivo da api, passou um grupo de funcoes

app.listen(config.get('api.porta'), ()=>console.log('A API está funcionando!')) // escuta uma porta do nosso computador para receber as requisicoes
// funcao callback