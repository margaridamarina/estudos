//representar no codigo o Fornecedor
const TabelaFornecedor = require('./tabelaFornecedor')

class Fornecedor {
    //pegar dados na hora de instanciar a classe e assimilar a nossa instancia temos que criar o metodo que constroi a classe
    constructor({id, empresa, email, categoria, dataCriacao, dataAtualizacao, versao}) {
        this.id = id
        this.empresa = empresa
        this.email = email
        this.categoria = categoria
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
        this.versao = versao
    }

    async criar() { //se comunicar com o banco de dados para pegar a informacao e persistir
        const resultado = await TabelaFornecedor.inserir({
            empresa: this.empresa, 
            email: this.email,
            categoria: this.categoria
        })

        this.id = resultado.id //campos criados conforme inserimos informacoes na tabela
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao = resultado.versao
    }

    async carregar() { //pegar o fornecedor
        const fornecedorEncontrado = await TabelaFornecedor.pegarPorId(this.id)
        this.empresa = fornecedorEncontrado.empresa //com os dados que recebemos do banco de dados precisamos pegar os valores e assimilar a nossa instancia para conseguirmos responder a requisicao
        this.email = fornecedorEncontrado.email
        this.categoria = fornecedorEncontrado.categoria
        this.dataCriacao = fornecedorEncontrado.categoria
        this.dataAtualizacao = fornecedorEncontrado.dataAtualizacao
        this.versao = fornecedorEncontrado.versao
    }
}

module.exports = Fornecedor //exportar para conseguir utilizar o metodo de rotas