import { Funcionário } from "./Funcionário.js";
export class Gerente extends Funcionário {
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf)
        this._bonificacao = 1.1;
    }
}