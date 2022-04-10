// Configurar o acesso ao banco de dados da nossa tabela
const Sequelize = require('sequelize')
const instancia = require('../../bancoDeDados')

const colunas = {
    empresa: {
        type: Sequelize.STRING, //usando biblioteca sequelize para declarar tipos
        allowNull: false, //obrigatória
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    categoria: {
        type: Sequelize.ENUM('racao', 'brinquedos'),
        allowNull: false,
    }
}

const opcoes = {
    freezeTableName: true, //congelar e nao alterar o nome na tabela
    tableName: 'fornecedores', //nome da tabela no mysql
    timestamps: true, //colunas relacionadas a data
    createdAt: 'dataCriacao', //renomeando
    updateAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('fornecedor', colunas, opcoes) //nome da tabela, variavel de colunas, opcoes da tabela