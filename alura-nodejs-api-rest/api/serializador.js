const ValorNaoSuportado = require('./erros/valorNaoSuportado')

//tratar dados
class Serializador {
    json (dados) { //metodo para serializar os dados em json recebendo os dados que queremos transformar
        return JSON.stringify(dados) //transformar um dado javascript em json
    }
    //para saber o tipo de conteudo que o frontend vai aceitar ou esta pedindo > vai em headers na aba de atualizacao (put ou post)> content-type
    serializar(dados){
        if (this.contentType === 'application/json') {
            return this.json(dados)
        }

        throw new ValorNaoSuportado(this.contentType)
    }
}

module.exports = {
    Serializador: Serializador,
    formatosAceitos: ['application/json']
}