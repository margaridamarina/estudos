const express = require('express') //usa a biblioteca express pra criar a api
const app = express() //instancia do express para gerar uma aplicacao
const bodyParser = require('body-parser') //trabalhar com json que é o formato padrao que uma api rest aceita
const config = require('config') //consumir os dados do arquivo de config default.json
const NaoEncontrado = require('./erros/naoEncontrado')
const CampoInvalido = require('./erros/campoInvalido')
const DadosNaoFornecidos = require('./erros/dadosNaoFornecidos')
const ValorNaoSuportado = require('./erros/valorNaoSuportado')
const formatosAceitos = require('./serializador').formatosAceitos
const SerializadorErro = require('./serializador').SerializadorErro

app.use(bodyParser.json()) //servir como plugin pro nosso app
app.use((requisicao, resposta, proximoMiddleware) => {
    let formatoRequisitado = requisicao.header('Accept')
    
    if(formatoRequisitado === '*/*') {
        formatoRequisitado = 'application/json'
    }

    if (formatosAceitos.indexOf(formatoRequisitado) === -1) {
        resposta.status(406)
        resposta.end()
        return
    } 

    resposta.setHeader('Content-Type', formatoRequisitado) //definir cabecalho, nome do cabecalho, valor do cabecalho
    proximoMiddleware()
})

app.use((requisicao, resposta, proximoMiddleware) => {
    resposta.set('Access-Control-Allow-Origin', '*')
    proximoMiddleware()
})

const roteador = require('./rotas/fornecedores')
const res = require('express/lib/response')
app.use('/api/fornecedores', roteador) //declarando primeira requisicao, consumir rota dentro do arquivo da api, passou um grupo de funcoes

app.use((erro, requisicao, resposta, proximoMiddleware) => {
    let status = 500 //erro generico que representa problema na api que nao sabemos o que aconteceu
    
    if(erro instanceof NaoEncontrado) {
        status = 404
    } 
    
    if(erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos) {
        status = 400
    }
    
    if(erro instanceof ValorNaoSuportado) {
        status = 406 //tipo de valor que o cliente pede nao é suportado pela nossa api
    }
    const serializador = new SerializadorErro(resposta.getHeader('Content-Type'))
    resposta.status(status)
    resposta.send(
        serializador.serializar({
            mensagem: erro.message,
            id: erro.idErro
        })
    )
})

app.listen(config.get('api.porta'), ()=>console.log('A API está funcionando!')) // escuta uma porta do nosso computador para receber as requisicoes
// funcao callback