import React, { Component } from 'react'
import './style.css'
import './'

export class FormularioCadastro extends Component {
  constructor(props) {
    super(props)
    this.titulo = ''
    this.texto = ''
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation()
    this.titulo = evento.target.value
  }

  _handleMudancatexto(evento) {
    evento.stopPropagation()
    this.texto = evento.target.value
  }

  _criarNota(evento) {
    evento.preventDefault()
    evento.stopPropagation()
    this.props.criarNota(this.titulo, this.texto)
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancatexto.bind(this)}
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

//Quando a gente joga aqui no nosso app ele vai interpretar essa hierarquia de filhos do nosso app e vai chamar o método render dos elementos para conseguir pegar a árvore e a hierarquias desses elementos, então tenho que pegar o método render, vou criar aqui. Ele tem que retornar minha estrutura de filhos. Ele vai dar um return de múltiplas linhas, vou abrir e fechar parênteses, e vou jogar todo o formulário ali dentro. Aqui tenho nosso formulário. Tenho meu render return formulário e esse formulário tem os filhos input área e button.

//O this no JavaScript é dinâmico, ele depende do contexto onde é chamado.. Apesar de estar dentro de um método de uma classe, na hora que chamo no on change e passei para esse evento o método que quero chamar, quem está chamando esse método é esse evento de on change, não a própria instância. Quando é um evento externo chamando um método de uma instância, o this não é passado para esse método, então não consegue achar. Quando passei o on change igual this handle mudança título, estou falando para ele guardar para mim a referência para esse método. Ele tem a referência para a função handle mudança de título. Só que na hora que executo esse método ele me dá o this is undefined, que vai dar um erro, porque quem está chamando a função não é a classe, é o método. Esse objeto externo que chamei de método e não é parte da instância que criei. Então, o this para dentro do método que a gente criou não é declarado, definido. Na hora que passo a referência para o método falar da instância de p preciso falar para ele que na hora que ele for executar essa função, esse método, associa ele a esse objeto. Dentro da associação vou passar o objeto que estou associando.

// Vou chamar o evento de on change, e dentro tenho que passar a referência para a função, o true método dessa instância do formulário que quero que ele chame. Vou criar uma nova instância de um handler, ou seja, um handle da mudança do texto. Esse handle vai receber o evento e quero passar para ele que além do título vou ter uma nota, um texto, e quero que associe, só que com o meu outro atributo this.texto, porque o target desse evento vai ser diferente da mudança do título, já que tenho um evento sendo disparado por outro elemento no html. Para fazer a mudança do on change tenho que passar uma referência para o método, então this handle da mudança do texto. E aí tenho que fazer a associação, o bind, para ele saber quem é o this que tem que usar, já que o this do Java script é dinâmico, como a gente viu. Tem que fazer um bind dessa associação com a instância que foi criada, então dou um bind com o this. This handle mudança de texto bind this e dessa maneira vou ter o this texto sendo associado.

//Declarando esses três métodos como sendo privados, já que não quero que nenhuma instância fora dessa classe consiga chamar.

// Como ele é um handle e está sendo disparado através de um evento, ele vai ter um parâmetro com as informações do evento que foi disparado. Tenho o handle de título, que vai ser receber por parâmetro um evento e aí quero passar esse método como referência para o on change usar.
// Dessa maneira estou pedindo para toda vez que o input mudar chamar o método da classe. Mas como a gente falou mais para a frente não adianta só chamar o método e dar um console.log nele. Quero salvar essa informação em algum outro lugar para quando vier no form e chamar o submission form, se eu vier mais para a frente que a gente vai fazer e chamar o submit, quero fazer alguma coisa com os eventos que salvei através dos métodos de on change.Para isso, vou ter que guardar o handle mudança de título, esse evento target value em alguma variável, algum atributo propriedade desse formulário de cadastro.

// A gente tem que ter nosso método construtor e nele a gente vai declarar as propriedades e atributos dessa classe. então estou declarando os atributos dessa classe. Vou chamar o this título, ele vai ser aspas vazias, vai ser inicializado como aspas vazias.Dentro do handle mudança de título quero falar que o this título vai ser igual ao evento target value, ou seja, cada vez que o handle for chamado vou atribuir o que tiver no campo de título no meu atributo de título na minha classe de formulário cadastro.Quando a gente usa o this título e o this handle mudança de título quer dizer que estou usando um atributo ou método de uma instância, então esse formulário cadastro quando a gente está no app js e usa ele como tag, quer dizer que está dando por trás dos panos um new no formulário cadastro.Ele me deu um erro, falando que preciso chamar o construtor antes do this, porque estou construindo uma classe que estende de componente. Antes de declarar atributos dessa classe filha tenho que chamar o construtor do meu pai.

//O que vou fazer é pegar o evento e dar um prevent default, quero prevenir, que ele não execute o comportamento padrão. Outra coisa que posso fazer inclusive nos outros eventos é evitar a propagação desse evento na minha árvore do html, no dom. Então, também quero que esse evento pare a propagação, então stop propagation. Como ele acontece para todos os eventos que os elementos html disparam vou colocar no handle mudança de texto e título além do criar nota. 

//Para esse criar nota funcionar preciso passar um título e um texto, então esse criar nota vai receber um título e o this texto. Dessa maneira consigo acessar uma propriedade que me foi passada na hora de construir o elemento, essa é a maneira que a gente cria propriedades do react aqui.

//Tenho meu card e vou colocar um novo título para um card novo. A gente está criando um método da instância do app e passando como propriedade e agora sim isso é uma propriedade, o js fala que é um atributo, mas a comunidade normalmente chama de propriedade, vamos passar como propriedade para o meu formulário, e lá recebo as propriedades do construtor, passo para o meu pai e consigo acessar elas através desse atributo que chamei de propriedades. This props criar nota, e aí consigo passar as informações que preciso para o elemento pai.
