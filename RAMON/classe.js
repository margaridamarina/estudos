console.clear()

class Pessoa {
    _nome = "Ramon";
    diaNascimento = 17
    mesNascimento = 05
    anoNascimento = 94

    get nome() {
        return this._nome
    }
    
    get aniversario() {
        return `${this.diaNascimento}/${this.mesNascimento}/${this.anoNascimento}` //trava a informação
    }

    set nome(a){
        if (typeof(a) === typeof(2)) {
            console.log('NOME NAO PODE SER NUMERO')
            return null
        }
        console.log("fui chamado")
        this._nome = a
    } // altera a informação do get
}

bola = new Pessoa()
console.log(bola.nome)
bola.nome = "margo"
console.log(bola.nome)
bola.nome = 2


console.log(
    bola.aniversario
)

bola.anoNascimento = '2020'
bola.diaNascimento = '25'

console.log(
    bola.aniversario
)
