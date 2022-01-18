import React, { Component } from "react";
import "./style.css";

export class FormularioCadastro extends Component{
  constructor(){
    super();
    this.titulo = "";
  }
    // a gente tem que ter nosso método construtor e nele a gente vai declarar as propriedades e atributos dessa classe. então estou declarando os atributos dessa classe. Vou chamar o this título, ele vai ser aspas vazias, vai ser inicializado como aspas vazias.Dentro do handle mudança de título quero falar que o this título vai ser igual ao evento target value, ou seja, cada vez que o handle for chamado vou atribuir o que tiver no campo de título no meu atributo de título na minha classe de formulário cadastro.Quando a gente usa o this título e o this handle mudança de título quer dizer que estou usando um atributo ou método de uma instância, então esse formulário cadastro quando a gente está no app js e usa ele como tag, quer dizer que está dando por trás dos panos um new no formulário cadastro. 
    // Ele me deu um erro, falando que preciso chamar o construtor antes do this, porque estou construindo uma classe que estende de componente. Antes de declarar atributos dessa classe filha tenho que chamar o construtor do meu pai. 
  handleMudancaTitulo(evento){
    this.titulo = evento.target.value;
    console.log(this.titulo);
  }
  // Como ele é um handle e está sendo disparado através de um evento, ele vai ter um parâmetro com as informações do evento que foi disparado. Tenho o handle de título, que vai ser receber por parâmetro um evento e aí quero passar esse método como referência para o on change usar.
  // Dessa maneira estou pedindo para toda vez que o input mudar chamar o método da classe. Mas como a gente falou mais para a frente não adianta só chamar o método e dar um console.log nele. Quero salvar essa informação em algum outro lugar para quando vier no form e chamar o submission form, se eu vier mais para a frente que a gente vai fazer e chamar o submit, quero fazer alguma coisa com os eventos que salvei através dos métodos de on change.Para isso, vou ter que guardar o handle mudança de título, esse evento target value em alguma variável, algum atributo propriedade desse formulário de cadastro.

  render(){
    return(
    <form className="form-cadastro">
      <input 
      type="text" 
      placeholder="Título" 
      className="form-cadastro_input"
      onChange={this.handleMudancaTitulo}/>
      <textarea 
      rows={15} 
      placeholder="Escreva sua nota..." className="form-cadastro_input"></textarea>
      <button 
      className="form-cadastro_input" className="form-cadastro_submit">Criar nota</button>
    </form>)
  }
}

export default FormularioCadastro;

//O this no JavaScript é dinâmico. Apesar de estar dentro de um método de uma classe, na hora que chamo no on change e passei para esse evento o método que quero chamar, quem está chamando esse método é esse evento de on change, não a própria instância. Quando é um evento externo chamando um método de uma instância, o this não é passado para esse método, então não consegue achar.
//Quando passei o on change igual this handle mudança título, estou falando para ele guardar para mim a referência para esse método. Aqui a mesma coisa. Ele tem a função para o falar, no caso aqui vai ter a referência para a função handle mudança de título.Só que na hora que executo esse método ele me dá o this is undefined, que vai dar um erro, porque quem está chamando a função falar não é a classe, é o método. Esse objeto externo que chamei de método e não é parte da instância que criei. Então, o this para dentro do método que a gente criou não é declarado, definido. E aí a gente vai ter que ver como lidar com isso no próximo vídeo.