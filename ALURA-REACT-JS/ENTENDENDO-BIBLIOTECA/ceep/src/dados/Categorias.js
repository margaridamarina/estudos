export default class Categorias{
  constructor(){// No caso das categorias, a primeira coisa que a gente pode pensar se a gente vai ter que inscrever e desinscrever classes ou métodos na hora que for observar essa classe, vou precisar de um array que guarde quem é que está observando, quem é que ela tem que notificar.
    this.categorias = [];
    this._inscritos = [];
  } // Vou ter minhas categorias, vou no construtor dele criar esse array, instanciar esse novo array. Então this.categorias vai ser igual a um novo array. Vai ser um array vazio inicialmente.
  
  inscrever(func){
    this._inscritos.push(func);
  }

  desinscrever(func){
    console.log(this._inscritos.length)
    this._inscritos = this._inscritos.filter(f => f !== func);
    console.log(this._inscritos.length)
}
  notificar(){
    this._inscritos.forEach(func => {
      func(this.categorias);
    })
  }

  adicionarCategoria(novaCategoria){
    this.categorias.push(novaCategoria);//vou adicionar essa nova categoria no meu array
    this.notificar();
  }
}