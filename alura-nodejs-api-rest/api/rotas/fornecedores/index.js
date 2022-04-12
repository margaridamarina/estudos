const roteador = require('express').Router() //agrupar rotas e exportar

const TabelaFornecedor = require('./tabelaFornecedor') //consumir tabela dentro do arquivo do roteador
const Fornecedor = require('./fornecedor') //usar classe Fornecedor nas nossas rotas

roteador.get('/', async (requisicao, resposta) => { //metodo get para obter os dados //como vamos nos comuncicar com um banco de dados com um serviço externo usamos promessa
    const resultados = await TabelaFornecedor.listar() //esperar o metodo terminar de executar
    resposta.send( //enviar resposta
        JSON.stringify(resultados) //retornar resposta
    )
})

roteador.post('/', async (requisicao, resposta) => { //usar o metodo post para executar uma acao que altera a nossa colecao inteira de documentos, inserir um dado novo 
    const dadosRecebidos = requisicao.body
    const fornecedor = new Fornecedor(dadosRecebidos)
    await fornecedor.criar() 
    resposta.send(
        JSON.stringify(fornecedor)
    )
})

roteador.get('/:idFornecedor', async (requisicao, resposta) => { //metodo get para obter os dados //declarando parametro da nossa rota
    try {
        const id = requisicao.params.idFornecedor //a gente consegue acessar dentro dessa funcao do get o id do nosso fornecedor pelos parametros
        const fornecedor = new Fornecedor({id: id}) //instanciar classe do fornecedor, passando como parametro um objeto
        await fornecedor.carregar()
        resposta.send(
            JSON.stringify(fornecedor)
        )
    } catch (erro) {
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

roteador.put('/:idFornecedor', async (requisicao, resposta) => { //metodo put para colocar informacoes novas na api
    try {
        const id = requisicao.params.idFornecedor //pegar as informacoes que estamos recebendo
        const dadosRecebidos = requisicao.body //pegar o corpo da requisicao
        const dados = Object.assign({}, dadosRecebidos, {id: id}) //juntar variaveis em um objeto so
        const fornecedor = new Fornecedor(dados) //instanciar classe do fornecedor
        await fornecedor.atualizar()
        resposta.end() //qd atualizamos algo em uma api rest nao precisamos retornar nenhuma informacao para quem ta construindo a api, apenas informar que teve sucesso
    } catch (erro) {
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

roteador.delete('/:idFornecedor',async (requisicao, resposta) => {
    try {
        const id = requisicao.params.idFornecedor //a gente consegue acessar dentro dessa funcao do get o id do nosso fornecedor pelos parametros
        const fornecedor = new Fornecedor({id: id}) //instanciar classe do fornecedor, passando como parametro um objeto
        await fornecedor.carregar() //verificar se o fornecedor existe, se nao existir vai emitir um erro
        await fornecedor.remover() //remover fornecedor pela requisicao
        resposta.end() //se a requisicao terminar e nao tivermos nenhum erro, foi um sucesso
    } catch (erro) {
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})


module.exports = roteador