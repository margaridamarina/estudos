const Sequelize = require('sequelize') //biblioteca Sequelize para se comunicar com banco de dados
const config = require('config') //consumir dados do arquivo default.json

const instancia = new Sequelize( //dados de acesso ao banco de dados
    config.get('mysql.banco-de-dados'),
    config.get('mysql.usuario'),
    config.get('mysql.senha'),
    {
        host: config.get('mysql.host'),
        dialect: 'mysql'
    }
)

module.exports = instancia //exportar para conseguir utilizar em outros arquivos