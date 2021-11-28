import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente()
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente()
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500); 

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 1002;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(conta2.saldo);
console.log("----")
console.log(0 instanceof Number)
console.log(0 instanceof String)
console.log(0 instanceof Object)
console.log(new Number(2) instanceof Number)
console.log(new Number(2) instanceof String)
console.log(new Number(2) instanceof Object)
