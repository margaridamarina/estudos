export default class Categorias{
  constructor(){
    this.categorias = [];
    this.inscritos = [];
  } // Vou ter minhas categorias, vou no construtor dele criar esse array, instanciar esse novo array. Então this.categorias vai ser igual a um novo array. Vai ser um array vazio inicialmente.
  
  inscrever(func){
    this._inscritos.push(func);

  }

  notificar(){
    this._inscritos.forEach(func => {
      func(this.categorias);
    })
  }

  adicionarCategoria(novaCategoria){
    this.categorias.push(novaCategoria);//vou adicionar essa nova categoria no meu array
  }
}