//pegar configuracoes do modelo de tabela e criar no banco de dados

const ModeloTabela = require('../rotas/fornecedores/modeloTabelaFornecedor')

ModeloTabela //sincronizar configuracoes
    .sync()
    .then(() => console.log('Tabela criada com sucesso')) //executar quando a promessa acabar
    .catch(console.log) //caso aconteca erro pegar com o metodo catch