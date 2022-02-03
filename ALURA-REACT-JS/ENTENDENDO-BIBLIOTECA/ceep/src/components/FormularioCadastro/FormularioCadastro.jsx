import React, { Component } from 'react'
import './style.css'
import './'

export class FormularioCadastro extends Component {
  constructor(props) {//Quero salvar essa informação em algum outro lugar para quando vier no form e chamar o submission form. Para isso, vou ter que guardar o handle mudança de título, esse evento target value em alguma variável, algum atributo propriedade desse formulário de cadastro. A gente tem que ter nosso método construtor e nele a gente vai declarar as propriedades e atributos dessa classe.
    super(props)//uma palavra especial que serve para fazer injeção de dependências e passar coisas dinamicamente para a classe, na instanciação dela
    this.titulo = '' 
    this.texto = ''
  }
  //Vou declarar esses três métodos como sendo privados, já que não quero que nenhuma instância fora dessa classe consiga chamar. 
  _handleMudancaTitulo(evento) {//Como ele é um handle e está sendo disparado através de um evento, ele vai ter um parâmetro com as informações do evento que foi disparado. Tenho o handle de título, que vai ser receber por parâmetro um evento e aí quero passar esse método como referência para o on change usar.
    evento.stopPropagation()
    //Toda vez que a gente dá um submit no formulário o comportamento padrão dele é recarregar a página, e tem vezes que não queremos recarregar, queremos que ela fique estável, porque já estou gerenciando todos os dados que preciso sem precisar recarregar a página.
    this.titulo = evento.target.value //Cada vez que o handle for chamado vou atribuir o que tiver no campo de título no meu atributo de título na minha classe de formulário cadastro.
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation()
    this.texto = evento.target.value
  }

  _criarNota(evento) {
    evento.preventDefault()
    evento.stopPropagation()
    this.props.criarNota(this.titulo, this.texto)
  }

  render() {
    return ( //Componente do jsx tem que devolver um único elemento pai. //Agora que tenho dois atributos sendo criados, dois atributos sendo preenchidos de acordo com os valores de mudança, quero chamar no submit form a criação de um novo card, então vou também criar esse evento. Form cadastro vou chamar o onSubmit, também vou associar para um criar card, vou chamar para o this criar card. Ou criar nota. Na hora de criar a nota vou ter que fazer a associação para saber quem é o this, para ter acesso às propriedades de título e texto que a gente já salvou.
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}> 
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)} 
          //Se quero pegar o título, por exemplo, porque quero salvar numa variável antes de submeter para o botão, vou querer usar os eventos de on change. 
          //Esse atributo novo que a gente vai passar para o input vai chamar uma função quando for disparado.Já que é um evento, quero que quando ele for disparado chame uma função. A gente quando está lidando com eventos criamos uma função que chamamos de handler.
          //Como vou criar uma função que deve ser chamada, vou fora do método criar outro método handler. 
          //Como é um método que depende da mudança de classe tenho que chamar através do this
          //Bind: O this no JavaScript é dinâmico. Apesar de estar dentro de um método de uma classe, na hora que chamo no on change e passei para esse evento o método que quero chamar, quem está chamando esse método é esse evento de on change, não a própria instância. Quando é um evento externo chamando um método de uma instância, o this não é passado para esse método, então não consegue achar.
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button
          className="form-cadastro_input"
          className="form-cadastro_submit"
        >
          Criar nota
        </button>
      </form>
    )
  }
}

export default FormularioCadastro

