//representar no codigo o Fornecedor
const tabelaFornecedor = require('./tabelaFornecedor')
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
        this.validar()
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

    async atualizar () { //assincrona para o node esperar esse metodo terminar antes de seguir e usarmos a nossa funcao
        await tabelaFornecedor.pegarPorId(this.id) //saber que o fornecedor existe
        const campos = ['empresa', 'email', 'categoria'] //pegar valores e montar um objeto para mandarmos para o banco //algumas propriedades como dataCriacao, dataAtualizacao, versao e id nao atualizamos, a propria tabela pelo mysql atualiza
        const dadosParaAtualizar = {} //dentro desse objeto colocaremos o que queremos atualizar
        
        campos.forEach((campo) => { //verificar se cada campo desses foi fornecido e está válido
            const valor = this[campo] //dados que recebemos para cada campo
            if (typeof valor === 'string' && valor.length > 0) {
                dadosParaAtualizar[campo] = valor
            }
        })
        
        if (Object.keys(dadosParaAtualizar).length === 0) {
            throw new Error('Não foram fornecidos dados para atualizar!')
        }
        
        await tabelaFornecedor.atualizar(this.id, dadosParaAtualizar) //como vai retornar uma promessa pq vai se comunicar com o banco de dados, colocamos um await
    }

    remover () { 
        return tabelaFornecedor.remover(this.id)
    }

    //adicionar validacao para rota de post para poder criar um fornecedor
    //estamos recebendo dados e criando no banco de dados mas nao estamos fazendo uma validacao se os dados sao validos para conseguirmos cadastrar dados ou impedir que dados invalidos sejam enviados para nossa tabela
    validar () {
        const campos = ['empresa', 'email', 'categoria'] //campos obrigatorios
        campos.forEach(campo => {
            const valor = this[campo] //pegando valor do campo dinamicamente
            if (typeof valor !== 'string' || valor.length === 0) { //verificar se valor é válido e preenchido
                throw new Error (`O campo '${campo}' está inválido`)
            }
        })
    }
}

module.exports = Fornecedor //exportar para conseguir utilizar o metodo de rotas