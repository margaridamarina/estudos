//exportar metodos que usamos dentro da nossa aplicacao
const Modelo = require('./modeloTabelaFornecedor') //retornar dados que estao no banco de dados da nossa api

module.exports = {
    listar () {
        return Modelo.findAll()
    },

    inserir (fornecedor) {
        return Modelo.create(fornecedor)
    },

    async pegarPorId (id) { //verificar se o fornecedor existe ou nao //assincrona pois teremos que pegar os dados que estao no banco
        const fornecedorEncontrado = await Modelo.findOne ({
            where: {
                id : id
            }
        })

        if (!fornecedorEncontrado) {
            throw new Error('Fornecedor não encontrado!')
        }

        return fornecedorEncontrado
    }
} 