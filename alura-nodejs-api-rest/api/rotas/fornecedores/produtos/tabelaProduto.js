//funcao DAO(data access object) que exporta todos os nossos metodos e funcoes para se comunicar com o banco de dados

const { inserir } = require('../tabelaFornecedor')
const Modelo = require('./modeloTabelaProdutos')
const instancia = require('../../../bancoDeDados') //resolver problema de concorrencia na api onde 2 pessoas tentam atualiza-la ao mesmo tempo

module.exports = {
    listar(idFornecedor) {
        return Modelo.findAll({
            where:{
                fornecedor: idFornecedor
            },
            raw:true
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
    },

    async pegarPorId(idProduto, idFornecedor){
        const encontrado = await Modelo.findOne({
            where:{
                id: idProduto,
                fornecedor: idFornecedor
            },
            raw: true //para retornar um objeto puro do javascript e nao uma instancia do Sequelize
        })

        if(!encontrado){
           throw new Error('Produto não foi encontrado!')
        }

        return encontrado
    },

    atualizar(dadosDoProduto, dadosParaAtualizar) {
        return Modelo.update(
            dadosParaAtualizar,
                {
                    where: dadosDoProduto
                }
        )
    },

    subtrair(idProduto, idFornecedor, campo, quantidade){
        return instancia.transaction(async transacao => {
            const produto = await Modelo.findOne({//encontrar um dos nossos modelos
                where: {//declarar caracteristicas do produto para saber onde encontra-lo
                    id:idProduto,
                    fornecedor:idFornecedor
                }
            })
            produto[campo] = quantidade 
            await produto.save() //pedindo pro sequelize salvar esse objeto no banco de dados
            return produto
        })
    }
}