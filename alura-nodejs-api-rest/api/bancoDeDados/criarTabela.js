//pegar configuracoes do modelo de tabela e criar no banco de dados
//lista de modelos de tabelas
const modelos = [
    require('../rotas/fornecedores/modeloTabelaFornecedor'),
    require('../rotas/fornecedores/produtos/modeloTabelaProdutos')
]

async function criarTabelas () {
    for (let contador = 0; contador < modelos.length; contador ++) {
        const modelo = modelos[contador]
        await modelo.sync() //sincronizar a tabela atual com a do modelo do banco de dados
    }

}

criarTabelas()