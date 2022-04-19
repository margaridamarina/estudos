const roteador = require('express').Router({mergeParams:true})//trazendo os parametros do roteador de cima
const tabela = require('./tabelaProduto')

    //declarando primeira rota
    //obter dados da api - metodo get
roteador.get('/', async (requisicao, resposta) => {
    const produtos = await tabela.listar(requisicao.params.idFornecedor) //utilizar o dal dentro da rota
    resposta.send( //enviar resposta
        JSON.stringify(produtos) //transformar dados em json
    )
})

module.exports = roteador //usar roteador