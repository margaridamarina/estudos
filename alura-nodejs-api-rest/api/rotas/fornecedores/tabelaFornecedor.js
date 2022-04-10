//exportar metodos que usamos dentro da nossa aplicacao
const Modelo = require('./modeloTabelaFornecedor') //retornar dados que estao no banco de dados da nossa api

module.exports = {
    listar () {
        return Modelo.findAll()
    }
} 