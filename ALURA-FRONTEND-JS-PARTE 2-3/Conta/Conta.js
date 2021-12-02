export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if (this.constructor == Conta) {
            throw new Error ("Você não deveria instanciar um objeto do tipo conta")
        
        }   
    }


    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() { 
        return this._saldo;
    }

    sacar(valor) {
        //método abstrato feito para ser sobrescrito por isso está vazio
        throw new Error("O método Sacar da Conta é abstrato, crie um método sacar no tipo de conta que deseja")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }
        

    depositar(valor) {
       this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
