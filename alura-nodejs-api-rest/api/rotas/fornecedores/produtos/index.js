const roteador = require('express').Router({mergeParams:true})//trazendo os parametros do roteador de cima
const Tabela = require('./tabelaProduto')
const Produto = require('./produto')
const Serializador = require('../../../serializador').SerializadorProduto

roteador.options('/', (requisicao, resposta) => {
    resposta.set('Access-Control-Allow-Methods', 'GET, POST')
    resposta.set('Access-Control-Allow-Headers', 'Content-Type')
    resposta.status(204)
    resposta.end()
})


roteador.get('/', async (requisicao, resposta) => { //obter dados da api - metodo get
    const produtos = await Tabela.listar(requisicao.fornecedor.id) //utilizar o dao dentro da rota
    const serializador = new Serializador(
        resposta.getHeader('Content-Type')
    )
    resposta.send( //enviar resposta
        serializador.serializar(produtos) //transformar dados em json
    )
})

roteador.post('/', async (requisicao, resposta, proximoMiddleware) => { //mudar informacoes da colecao de documentos
    try {
        const idFornecedor = requisicao.fornecedor.id
        const corpo = requisicao.body
        const dados = Object.assign({}, corpo, {fornecedor: idFornecedor}) //juntando variaveis em uma so
        const produto = new Produto(dados)
        await produto.criar()
        const serializador = new Serializador(
            resposta.getHeader('Content-Type') 
        )
        resposta.set('ETag', produto.versao)//enriquecendo resposta do documento //primeiro cabecalho ETag,versao do documento
        const timestamp = (new Date(produto.dataAtualizacao)).getTime() 
        resposta.set('Last-Modified', timestamp)//cabecalho Last-Modified para data de atualizacao
        resposta.set('Location', `/api/fornecedores/${produto.fornecedor}/produtos/${produto.id}`)//cabecalho Location para acessar mais informacoes do produto
        resposta.status(201)
        resposta.send(
            serializador.serializar(produto)
        )
    } catch(erro) {
        proximoMiddleware(erro)
    }
})

roteador.options('/:id', (requisicao, resposta) => {
    resposta.set('Access-Control-Allow-Methods', 'DELETE, GET, HEAD, PUT')
    resposta.set('Access-Control-Allow-Headers', 'Content-Type')
    resposta.status(204)
    resposta.end()
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

roteador.get('/:id', async(requisicao, resposta, proximoMiddleware) => {  //Obter detalhes de um produto
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
        resposta.set('ETag', produto.versao)//enriquecendo resposta do documento //primeiro cabecalho ETag,versao do documento
        const timestamp = (new Date(produto.dataAtualizacao)).getTime() 
        resposta.set('Last-Modified', timestamp)//cabecalho Last-Modified para data de atualizacao
        resposta.send(
            serializador.serializar(produto)
        )
    } catch(erro){
        proximoMiddleware(erro)
    }
})

roteador.head('/:id', async(requisicao, resposta, proximoMiddleware) => {
    try{
        const dados = {
            id: requisicao.params.id,
            fornecedor: requisicao.fornecedor.id
        }
        const produto = new Produto(dados)
        await produto.carregar()
        resposta.set('ETag', produto.versao)//enriquecendo resposta do documento //primeiro cabecalho ETag,versao do documento
        const timestamp = (new Date(produto.dataAtualizacao)).getTime() 
        resposta.set('Last-Modified', timestamp)//cabecalho Last-Modified para data de atualizacao
        resposta.status(200)
        resposta.end()
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
        await produto.carregar() //ja que estamos alterando o produto, o id, o numero da versao e a data de atualizacao estao sendo alterados, entao precisamos pegar esse campo atualizado
        resposta.set('ETag', produto.versao)//enriquecendo resposta do documento //primeiro cabecalho ETag,versao do documento
        const timestamp = (new Date(produto.dataAtualizacao)).getTime() 
        resposta.set('Last-Modified', timestamp)//cabecalho Last-Modified para data de atualizacao
        resposta.status(204)
        resposta.end()
    } catch(erro){
        proximoMiddleware(erro)
    }
})

roteador.options('/:id/diminuir-estoque', (requisicao, resposta) => {
    resposta.set('Access-Control-Allow-Methods', 'POST')
    resposta.set('Access-Control-Allow-Headers', 'Content-Type')
    resposta.status(204)
    resposta.end()
})

roteador.post('/:id/diminuir-estoque', async(requisicao, resposta, proximoMiddleware) => {
   try{
    const produto = new Produto({
        id: requisicao.params.id,
        fornecedor: requisicao.fornecedor.id
    })
    await produto.carregar()
    produto.estoque = produto.estoque - requisicao.body.quantidade
    await produto.diminuirEstoque()
    await produto.carregar() //ja que estamos alterando o produto, o id, o numero da versao e a data de atualizacao estao sendo alterados, entao precisamos pegar esse campo atualizado
    resposta.set('ETag', produto.versao)//enriquecendo resposta do documento //primeiro cabecalho ETag,versao do documento
    const timestamp = (new Date(produto.dataAtualizacao)).getTime() 
    resposta.set('Last-Modified', timestamp)//cabecalho Last-Modified para data de atualizacao
    resposta.status(204)
    resposta.end()
   } catch(erro){
        proximoMiddleware(erro)
   }
})

module.exports = roteador //usar roteador