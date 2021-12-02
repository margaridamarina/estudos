import { Conta } from './Conta.js';

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;
  constructor(cliente, agencia) {
    super(0, cliente, agencia); // Esse super(), inclusive, se eu passar o mouse em cima dele, ele está falando que esse super está referenciando o construtor da classe Conta, e eu preciso de um saldo inicial de um cliente e de uma agência.
    //saldo sempre vai iniciar em 0 
    ContaCorrente.numeroDeContas += 1;
  }
  //sobrescrevendo o comportamento de sacar
  sacar(valor) {
    let taxa = 1.1
    return this._sacar(valor, taxa);
  }
}
