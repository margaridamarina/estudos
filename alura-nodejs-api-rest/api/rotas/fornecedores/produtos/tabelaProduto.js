const Modelo = require('./modeloTabelaProdutos')

module.exports = {
    listar(idFornecedor) {
        return Modelo.findAll({
            where:{
                fornecedor: idFornecedor
            }
        })
    }
}