const roteador = require('express').Router({mergeParams:true})//trazendo os parametros do roteador de cima
const Tabela = require('./tabelaProduto')
const Produto = require('./produto')

//declarando primeira rota
//obter dados da api - metodo get
roteador.get('/', async (requisicao, resposta) => {
    const produtos = await Tabela.listar(requisicao.params.idFornecedor) //utilizar o dal dentro da rota
    resposta.send( //enviar resposta
        JSON.stringify(produtos) //transformar dados em json
    )
})
//mudar informacoes da colecao de documentos
roteador.post('/', async (requisicao, resposta) => {
    const idFornecedor = requisicao.params.idFornecedor 
    const corpo = requisicao.body
    const dados = Object.assign({}, corpo, {fornecedor: idFornecedor}) //juntando variaveis em uma so
    const produto = new Produto(dados)
    await produto.criar()
    resposta.status(201)
    resposta.send(produto)
})

module.exports = roteador //usar roteador