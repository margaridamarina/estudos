const roteador = require('express').Router() //agrupar rotas e exportar
const TabelaFornecedor = require('./tabelaFornecedor') //consumir tabela dentro do arquivo do roteador
const Fornecedor = require('./fornecedor') //usar classe Fornecedor nas nossas rotas
const SerializadorFornecedor = require('../../serializador').SerializadorFornecedor

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

//usar o metodo post para executar uma acao que altera a nossa colecao inteira de documentos, inserir um dado novo 
//proximoMiddleware - funcao que diz ao express js para continuar com o proximo middleware da pilha, é possivel empilhar varios middlewares pra realizar em camadas os processos de acesso aos dados
//dessa forma garantimos que so havera acesso a partir da rota atraves do middleware, e com esse empilhamento fica bem mais facil restringir determinados acessos
roteador.post('/', async (requisicao, resposta, proximoMiddleware) => { 
   try {
    const dadosRecebidos = requisicao.body
    const fornecedor = new Fornecedor(dadosRecebidos)
    await fornecedor.criar() 
    resposta.status(201)
    const serializador = new SerializadorFornecedor(resposta.getHeader('Content-Type'))
    resposta.send(
        serializador.serializar(fornecedor) //retornar resposta
    )
   } catch (erro) {
        proximoMiddleware(erro)
   }

})

roteador.get('/:idFornecedor', async (requisicao, resposta, proximoMiddleware) => { //metodo get para obter os dados //declarando parametro da nossa rota
    try {
        const id = requisicao.params.idFornecedor //a gente consegue acessar dentro dessa funcao do get o id do nosso fornecedor pelos parametros
        const fornecedor = new Fornecedor({id: id}) //instanciar classe do fornecedor, passando como parametro um objeto
        await fornecedor.carregar()
        resposta.status(200)
        const serializador = new SerializadorFornecedor(
            resposta.getHeader('Content-Type'),
            ['email', 'dataCriacao', 'dataAtualizacao', 'versao']
            )
        resposta.send(
            serializador.serializar(fornecedor)
        )
    } catch (erro) {
        proximoMiddleware(erro)
    }
})

roteador.put('/:idFornecedor', async (requisicao, resposta, proximoMiddleware) => { //metodo put para colocar informacoes novas na api
    try {
        const id = requisicao.params.idFornecedor //pegar as informacoes que estamos recebendo
        const dadosRecebidos = requisicao.body //pegar o corpo da requisicao
        const dados = Object.assign({}, dadosRecebidos, {id: id}) //juntar variaveis em um objeto so
        const fornecedor = new Fornecedor(dados) //instanciar classe do fornecedor
        await fornecedor.atualizar()
        resposta.status(204)
        resposta.end() //qd atualizamos algo em uma api rest nao precisamos retornar nenhuma informacao para quem ta construindo a api, apenas informar que teve sucesso
    } catch (erro) {//variavel erro para conseguir gerar e verificar o codigo de resposta correto
        proximoMiddleware(erro)
    }
})

roteador.delete('/:idFornecedor',async (requisicao, resposta, proximoMiddleware) => {
    try {
        const id = requisicao.params.idFornecedor //a gente consegue acessar dentro dessa funcao do get o id do nosso fornecedor pelos parametros
        const fornecedor = new Fornecedor({id: id}) //instanciar classe do fornecedor, passando como parametro um objeto
        await fornecedor.carregar() //verificar se o fornecedor existe, se nao existir vai emitir um erro
        await fornecedor.remover() //remover fornecedor pela requisicao
        resposta.status(204)
        resposta.end() //se a requisicao terminar e nao tivermos nenhum erro, foi um sucesso
    } catch (erro) {
        proximoMiddleware(erro)
    }
})

const roteadorProdutos = require('./produtos') //encaixar roteador de produtos dentro de fornecedores

const verificarFornecedor = async (requisicao, resposta, proximoMiddleware) => {
    try{
        const id = requisicao.params.idFornecedor
        const fornecedor = new Fornecedor({id:id})
        await fornecedor.carregar()
        requisicao.fornecedor = fornecedor //injetar valores dentro da requisicao //pratica do express comum //estara disponivel por todas as rotas que vierem dps desse middleware
        proximoMiddleware()
    } catch(erro) {
        proximoMiddleware(erro)
    }
}

roteador.use('/:idFornecedor/produtos', verificarFornecedor, roteadorProdutos) 
//aplicar essas rotas dentro das rotas de fornecedores 
//colecao de produtos que pertence a esse unico fornecedor
//primeiro parametro rota e segundo parametro roteador

module.exports = roteador