export class Funcionário {
    _bonificacao = 1

    constructor(nome, salario, cpf) {
       this._nome = nome;
       this.salario = salario;
       this.cpf = cpf;
       this._bonificacao = 1 //o atributo que não muda não precisa passar no construtor
       this._senha;  
    }

    /*get senha(){
        return this._senha;
    } //Ele vai ser uma propriedade de somente leitura, ele vai retornar o this._senha.*/

    autenticar(senha){
        return senha == this._senha;
    }
    cadastrarSenha(senha){
        this._senha = senha;
    }
}