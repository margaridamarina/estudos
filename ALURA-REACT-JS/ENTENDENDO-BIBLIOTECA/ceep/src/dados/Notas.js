export default class ArrayDeNotas{
  constructor(){
    this.notas = [] //Esse array vai ter também lá no construtor dele um array de fato, vou ter um this.notas que vai ser igual um array vazio. 
    this.indice = [];
  }

  adicionarNota(titulo, texto, categoria){//Já tenho minha classe que representa uma nota e vou usar essa classe na hora que for adicionar uma nota. Ao invés de receber aqui, posso instanciar ela dinamicamente. Já que estou criando como uma classe que não estou expondo, vou vir aqui e vou receber só meu título, meu texto, e minha categoria, porque aqui dentro faço uma nova nota
    const novaNota = new Nota(titulo, texto, categoria)
    this.notas.push(novaNota);
  }
// A diferença aqui é que na hora que eu for adicionar uma nova nota, na hora que eu tiver meu adicionar nota, vou ter que receber uma nota, e essa nota vai ser um objeto, vai ser aquele objeto que a gente está criando no nosso app. Vai ser esse objeto aqui. Então, meu título, minha categoria e meu texto.Para isso, essa nota vai ter que ter uma outra classe. Vou criar uma classe aqui dentro. -->
  apagarNota(indice){
    this.notas.splice(indice,1)
  } // Já que consigo replicar minhas notas, a mesma coisa vou fazer aqui no meu deletar notas, ou apagar notas, vou receber um índice e aqui dentro vou dar um this.notas.splice e a partir do meu índice vou deletar uma nota. O splice vou deletar uma única nota.

  inscrever(func){
    this._inscritos.push(func);

  }

  notificar(){
    this._inscritos.forEach(func => {
      func(this.categorias);
    })
  }
}

class Nota{
  constructor(titulo, texto, categoria){
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}