const roteador = require('express').Router({mergeParams:true})
const tabela = require('./tabelaProduto')


roteador.get('/', async (requisicao, resposta) => {
    const produtos = await tabela.listar(requisicao.params.idFornecedor)
    resposta.send(
        JSON.stringify(produtos)
    )
})

module.exports = roteador