const roteador = require('express').Router({mergeParams:true})//trazendo os parametros do roteador de cima
const Tabela = require('./tabelaProduto')
const Produto = require('./produto')
const Serializador = require('../../../serializador').SerializadorProduto

//declarando primeira rota
//obter dados da api - metodo get
roteador.get('/', async (requisicao, resposta) => {
    const produtos = await Tabela.listar(requisicao.fornecedor.id) //utilizar o dal dentro da rota
    const serializador = new Serializador(
        resposta.getHeader('Content-Type')
    )
    resposta.send( //enviar resposta
        serializador.serializar(produtos) //transformar dados em json
    )
})
//mudar informacoes da colecao de documentos
roteador.post('/', async (requisicao, resposta, proximoMiddleware) => {
    try {
        const idFornecedor = requisicao.fornecedor.id
        const corpo = requisicao.body
        const dados = Object.assign({}, corpo, {fornecedor: idFornecedor}) //juntando variaveis em uma so
        const produto = new Produto(dados)
        await produto.criar()
        const serializador = new Serializador(
            resposta.getHeader('Content-Type')
        )
        resposta.status(201)
        resposta.send(
            serializador.serializar(produto)
        )
    } catch(erro) {
        proximoMiddleware(erro)
    }
})

roteador.delete('/:id', async (requisicao, resposta) => {
    const dados = {
        id: requisicao.params.id,
        fornecedor: requisicao.fornecedor.id
    }
    const produto = new Produto(dados)
    await produto.apagar()
    resposta.status(204)
    resposta.end()
})
//Obter detalhes de um produto
roteador.get('/:id', async(requisicao, resposta, proximoMiddleware) => {
    try{
        const dados = {
            id: requisicao.params.id,
            fornecedor: requisicao.fornecedor.id
        }
        const produto = new Produto(dados)
        await produto.carregar()
        const serializador = new Serializador(
            resposta.getHeader('Content-Type'),
            ['preco', 'estoque', 'fornecedor', 'dataCriacao', 'dataAtualizacao', 'versao']
        )
        resposta.send(
            serializador.serializar(produto)
        )
    } catch(erro){
        proximoMiddleware(erro)
    }
})

roteador.put('/:id', async (requisicao, resposta, proximoMiddleware) => {
    try{
        const dados = Object.assign(
            {},
            requisicao.body,
            {
            id: requisicao.params.id,
            fornecedor: requisicao.fornecedor.id 
            }
        )
        const produto = new Produto(dados)
        await produto.atualizar()
        resposta.status(204)
        resposta.end()
    } catch(erro){
        proximoMiddleware(erro)
    }
})

module.exports = roteador //usar roteador