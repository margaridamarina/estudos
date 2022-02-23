console.log("Objeto:");
const objPadrao = {
  nome: "Jonh",

  greet: function () {
    console.log("Olá, sou o ", this.nome);
    console.log(this);
  },
};

objPadrao.greet();
console.log("--------------------\n\n");
console.log("Classe:");

console.log("Parte 1, definição:");
class ClassPadrao {
  nome = "Mary";

  greet() {
    console.log("Olá, sou o ", this.nome);
    console.log(this);
  }

  setName(name) {
    this.nome = name;
  }
}

const mary = new ClassPadrao(); // Instancia
mary.greet();
mary.setName("Margarida");
mary.greet();

console.log("--------------------\n\n");
console.log("Parte 2, features:");

console.log("O contexto de cada instancia é isolado");
const margarida = new ClassPadrao();
margarida.greet();

console.log("Metodos staticos");

class ClasseComMetodoEstatico {
  // static method
  static ola() {
    console.log("Olá, tudo bem?");
  }
}

const algo = new ClasseComMetodoEstatico();
// algo.ola();
console.log(
  "metodos staticos são acessados atráves da classe em vez da instancia"
);
ClasseComMetodoEstatico.ola();

console.log("--------------------\n\n");
console.log("Parte 3, herança!:");

class Pessoa {
  eat(food) {
    console.log("Estou comendo", food);
  }

  greet() {
    console.log("Olá, tudo  bem?");
  }
}

class Margarida extends Pessoa {
  eat(food) {
    console.log("Apesar de ter", food, "eu quero miojo");
  }
}

class Ramon extends Pessoa {
  greet() {
    console.log("Ea!");
  }
}

const margoh = new Margarida();
margoh.greet();
margoh.eat("ovo");

const ramon = new Ramon();
ramon.greet();
ramon.eat("ovo");

console.log("--------------------\n\n");
console.log("Parte 4, getters and setters:");

class Aniversario {
  dia = null;
  ano = null;
  mes = null;

  get data() {
    console.log("get chamado");
    return `${this.dia}/${this.mes}/${this.ano}`;
  }

  set data(dataRecebida) {
    console.log("set chamado");
    // recebendo '17/05/1994' -> converte em -> [17, 05, 1994]
    const dataQuebradaEmUmaLista = dataRecebida.split("/");
    this.dia = dataQuebradaEmUmaLista[0];
    this.mes = dataQuebradaEmUmaLista[1];
    this.ano = dataQuebradaEmUmaLista[2];
  }
}

const birthday = new Aniversario();

console.log(birthday.data);
birthday.data = "17/05/1994";
console.log(birthday.data);
console.log(birthday.ano, birthday.dia, birthday.mes);
