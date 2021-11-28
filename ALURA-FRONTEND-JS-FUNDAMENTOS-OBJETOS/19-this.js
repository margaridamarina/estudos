const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function () {
        console.log(`${pessoa.nome}`)
    }
}

pessoa.imprimeNome() //Ana

//é o mesmo que 

const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function () {
        console.log(`${this.nome}`)
    }
}

pessoa.imprimeNome() //Ana

//--------

function imprimeNomeEmail() {
    console.log(`nome: ${this.nome}, email ${this.email}`)
}

const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
}

const pessoa2 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: imprimeNomeEmail
}

pessoa1.imprimeInfo()
//nome: Ana, email a@email.com
pessoa2.imprimeInfo()
//nome: Paula, email p@email.com

// O this representa o objeto que executa a função. Podemos dizer que a instrução passada para o JavaScript é: “execute a função aqui, utilizando este contexto”.
// é o mesmo que

function Pessoa(nome, email) {
    this.nome = nome
    this.email = email
    this.imprimeNomeEmail = function () {
        console.log(`nome: ${this.nome}, email: ${this.email}`)
    }
}

const pessoa1 = new Pessoa("Ana", "a@email.com")
const pessoa2 = new Pessoa("Paula", "p@email.com")

pessoa1.imprimeNomeEmail()
// nome: Ana, email: a@email.com
pessoa2.imprimeNomeEmail()
// nome: Paula, email: p@email.com


