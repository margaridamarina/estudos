//classificando erros

class NaoEncontrado extends Error {
    constructor (nome) { //para conseguir instanciar a classe NaoEncontrado
        super(`${nome} não foi encontrado!`) //chama o constructor da classe Error
        this.name = 'NãoEncontrado' //alterar propriedade que vieram copiadas da classe Error
        this.idErro = 0
    }
}

module.exports = NaoEncontrado