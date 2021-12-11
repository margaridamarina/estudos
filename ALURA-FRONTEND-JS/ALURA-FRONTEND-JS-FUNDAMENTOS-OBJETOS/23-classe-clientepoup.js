class Cliente  {
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
        console.log('construtor cliente')
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente {
    constructor( nome,email,cpf,saldo, saldoPoupanca) {
        console.log('construtor client poup começa')
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
        console.log('construtor client poup termina')

    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }

}

const andre = new ClientePoupanca("Andre", "a@email.com", "2323223232", 100, 200)

console.log(andre)

andre.depositar(50)
andre.depositarPoupanca(50)

console.log(andre)