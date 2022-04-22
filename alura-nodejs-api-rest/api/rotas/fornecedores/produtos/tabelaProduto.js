//funcao dal que exporta todos os nossos metodos e funcoes para se comunicar com o banco de dados

const { inserir } = require('../tabelaFornecedor')
const Modelo = require('./modeloTabelaProdutos')

module.exports = {
    listar(idFornecedor) {
        return Modelo.findAll({
            where:{
                fornecedor: idFornecedor
            }
        })
    },

    inserir(dados){
        return Modelo.create(dados)
    },

    remover(idProduto, idFornecedor){
        return Modelo.destroy({
            where: {
                id: idProduto,
                fornecedor: idFornecedor
            }
        })
    }
}