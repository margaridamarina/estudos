//exportar conexao com banco de dados

const Sequelize = require('sequelize') //biblioteca Sequelize para se comunicar com banco de dados
const config = require('config') //consumir dados do arquivo de config default.json
const instancia = new Sequelize( //configurar dados de acesso ao banco de dados
    config.get('mysql.banco-de-dados'),
    config.get('mysql.usuario'),
    config.get('mysql.senha'),
    {
        //configuracoes da conexao
        host: config.get('mysql.host'), //ip da maquina que ta rodando o banco mysql
        dialect: 'mysql', //tipo de banco que estamos trabalhando
        port: config.get('mysql.port')
    }
)

module.exports = instancia //exportar para conseguir utilizar em outros arquivos