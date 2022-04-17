//exportar metodos que usamos dentro da nossa aplicacao
const Modelo = require('./modeloTabelaFornecedor') //retornar dados que estao no banco de dados da nossa api
const NaoEncontrado = require('../../erros/naoEncontrado')


module.exports = {
    listar () {
        return Modelo.findAll() //retornando os dados como instancias do sequelize
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
            throw new NaoEncontrado()
        }

        return fornecedorEncontrado
    },

    atualizar (id, dadosParaAtualizar) {
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: {id: id} //procurar fornecedor para atualizar usando o nosso id
            }
        )
    },

    remover (id) {
        return Modelo.destroy({
            where: {id: id}//procurar fornecedor para remover usando o nosso id
        })
    }
} 