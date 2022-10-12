console.clear()
function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const andre = new Cliente("André", "35464645454654", "andre@email", 100)

console.log(andre)

// a partir do cliente está criando um novo cliente
//const andre é uma nova instância de cliente, criado a partir da função construtora
