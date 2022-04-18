const Sequelize = require('sequelize')

const instancia = require('../../../bancoDeDados')

const colunas = {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false //obrigatorio, tem que ta preenchido
    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    estoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    fornecedor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('../modeloTabelaFornecedor'),
            key: 'id'
        }
    }
}


const opcoes = {
    freezeTableName: true, //congelar e nao alterar o nome na tabela
    tableName: 'produtos', //nome da tabela no mysql
    timestamps: true, //colunas relacionadas a data
    createdAt: 'dataCriacao', //renomeando
    updateAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('produto', colunas, opcoes)