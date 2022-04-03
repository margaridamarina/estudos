const express = require('express') //usa a biblioteca express pra criar a api
const app = express() //instancia do express para gerar uma aplicacao
const bodyParser = require('body-parser') //trabalhar com json que é o formato padrao que uma api rest aceita
const config = require('config')

app.use(bodyParser.json()) //servir como plugin pro nosso app

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador) //consumir rota dentro do arquivo da api

app.listen(config.get('api.porta'), ()=>console.log('A API está funcionando!')) // escuta uma porta do nosso computador para receber as requisicoes
