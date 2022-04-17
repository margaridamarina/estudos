const ValorNaoSuportado = require('./erros/valorNaoSuportado')

//tratar dados
class Serializador {
    json (dados) { //metodo para serializar os dados em json recebendo os dados que queremos transformar
        return JSON.stringify(dados) //transformar um dado javascript em json
    }
    //para saber o tipo de conteudo que o frontend vai aceitar ou esta pedindo > vai em headers na aba de atualizacao (put ou post)> content-type
    
    serializar(dados){
        if (this.contentType === 'application/json') {
            return this.json(this.filtrarObjeto(dados)) //assim mandamos os nossos dados direto para o nosso metodo json salvar em json
        }

        throw new ValorNaoSuportado(this.contentType)
    }

    filtrarObjeto(dados){
        const novoObjeto = {} //declarando objeto vazio
        this.camposPublicos.forEach((campo) => {
            if (dados.hasOwnProperty(campo)) { //verifica se a variavel dados tem a propriedade campo
                novoObjeto[campo] = dados[campo] //criando novo objeto com os campos que precisamos //atribuindo um valor a essa propriedade pra esse objeto
            }
        })
        return novoObjeto
    }
}

class SerializadorFornecedor extends Serializador {
    constructor(contentType) {
        super() //chama o construtor da classe que estamos estendendo
        this.contentType = contentType
        this.camposPublicos = [
            'id',
            'empresa',
            'categoria'
        ]
    }
}

module.exports = {
    Serializador: Serializador,
    SerializadorFornecedor: SerializadorFornecedor,
    formatosAceitos: ['application/json']
}