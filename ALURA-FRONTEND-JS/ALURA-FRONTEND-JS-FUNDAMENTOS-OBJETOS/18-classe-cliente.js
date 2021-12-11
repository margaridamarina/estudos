console.clear();

class Cliente  {
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

const andre = new Cliente ("Andre", "andre@email.com", "1232131231", 100)
const and = new Cliente ("And", "and@email.com", "123213", 9)

and.exibirSaldo()
andre.exibirSaldo()