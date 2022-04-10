const roteador = require('express').Router() //agrupar rotas e exportar

const TabelaFornecedor = require('./tabelaFornecedor') //consumir tabela dentro do arquivo do roteador
const Fornecedor = require('./fornecedor') //usar classe Fornecedor nas nossas rotas

roteador.get('/', async (requisicao, resposta) => { //como vamos nos comuncicar com um banco de dados com um serviço externo usamos promessa
    const resultados = await TabelaFornecedor.listar() //esperar o metodo terminar de executar
    resposta.send( //enviar resposta
        JSON.stringify(resultados) //retornar resposta
    )
})

roteador.post('/', (requisicao, resposta) => { 
    const dadosRecebidos = requisicao.body
    const fornecedor = new Fornecedor(dadosRecebidos) 
})

module.exports = roteador