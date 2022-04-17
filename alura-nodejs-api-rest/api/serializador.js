const ValorNaoSuportado = require('./erros/valorNaoSuportado')
const jsontoxml = require('jsontoxml')

//tratar dados
class Serializador {
    json (dados) { //metodo para serializar os dados em json recebendo os dados que queremos transformar
        return JSON.stringify(dados) //transformar um dado javascript em json
    }
    //para saber o tipo de conteudo que o frontend vai aceitar ou esta pedindo > vai em headers na aba de atualizacao (put ou post)> content-type
    
    xml(dados){
        let tag = this.tagSingular
        if (Array.isArray(dados)) {
            tag = this.tagPlural
            dados = dados.map((item)=>{ //metodo em que conseguimos executar uma funcao para cada item da lista e pra cada item executamos a funcao e o resultado da funcao forma uma nova lista
                return {
                    [this.tagSingular]: item
                }
            })
        }
        return jsontoxml({[tag]:dados})
    }

    serializar(dados){
        dados = this.filtrar(dados)

        if (this.contentType === 'application/json') {
            return this.json(dados) //assim mandamos os nossos dados direto para o nosso metodo json salvar em json
        }

        if (this.contentType === 'application/xml') {
            return this.xml(dados)
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

    filtrar(dados){//como listar retorna uma lista precisamos tratar essa lista
        if(Array.isArray(dados)){ //verifica se a variavel dados é um array
            dados = dados.map(item => {
                return this.filtrarObjeto(item)  //o map vai passar uma funcao que vai executar para cada item da lista so que vai pegar o resultado da funcao e criar uma lista a partir dela
        })
        } else {
            dados = this.filtrarObjeto(dados)
        }
        return dados
    }
}

class SerializadorFornecedor extends Serializador {
    constructor(contentType, camposExtras) {
        super() //chama o construtor da classe que estamos estendendo
        this.contentType = contentType
        this.camposPublicos = [
            'id',
            'empresa',
            'categoria'
        ].concat(camposExtras || [])
        this.tagSingular = 'Fornecedor'
        this.tagPlural = 'Fornecedores'
    }
}

class SerializadorErro extends Serializador {
    constructor(contentType, camposExtras) {
        super()
        this.contentType = contentType
        this.camposPublicos = [
            'id',
            'mensagem'
        ].concat(camposExtras || [])
        this.tagSingular = 'Erro'
        this.tagPlural = 'Erros'
    }
}

module.exports = {
    Serializador: Serializador,
    SerializadorFornecedor: SerializadorFornecedor,
    SerializadorErro: SerializadorErro,
    formatosAceitos: ['application/json', 'application/xml']
}