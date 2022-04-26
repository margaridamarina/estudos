const roteador = require('express').Router() //agrupar rotas e exportar
const TabelaFornecedor = require('./tabelaFornecedor') //consumir tabela dentro do arquivo do roteador
const SerializadorFornecedor = require('../../serializador').SerializadorFornecedor

roteador.options('/', (requisicao, resposta) => {
    resposta.set('Access-Control-Allow-Methods', 'GET')
    resposta.set('Access-Control-Allow-Headers', 'Content-Type')
    resposta.status(204)
    resposta.end()
})

//metodo get para obter os dados 
//como vamos nos comuncicar com um banco de dados com um serviço externo usamos promessa 
//objeto request com propridades para acessar dados do lado do cliente e facilitar as requisicoes http 
//objeto response com metodos para enviarmos dados para o lado cliente por meio das requisicoes http
roteador.get('/', async (requisicao, resposta) => { 
    const resultados = await TabelaFornecedor.listar() //esperar o metodo terminar de executar
    resposta.status(200)
    const serializador = new SerializadorFornecedor(resposta.getHeader('Content-Type'))
    resposta.send( //enviar resposta
        serializador.serializar(resultados) //retornar resposta
    )
})

module.exports = roteador