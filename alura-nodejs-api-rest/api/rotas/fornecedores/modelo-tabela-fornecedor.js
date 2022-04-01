// Configurar o acesso ao banco de dados
const Sequeliza = require('sequelize')
const instancia = require('../../banco-de-dados')

const colunas = {
    empresa: {
        type: Sequelize.STRING,
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
    tableName: 'fornecedores', 
    timestamps: true,
    createdAt: 'dataCriacao', //renomeando
    updateAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('fornecedor', colunas, opcoes) //nome da tabela, variavel de colunas, opcoes da tabela