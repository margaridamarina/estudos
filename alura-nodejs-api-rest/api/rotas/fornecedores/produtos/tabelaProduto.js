const Modelo = require('./modeloTabelaProdutos')

//exportar objeto com todas as funcoes do nosso dal
module.exports = {
    listar(idFornecedor) {
        return Modelo.findAll({
            where:{
                fornecedor: idFornecedor
            }
        })
    }
}