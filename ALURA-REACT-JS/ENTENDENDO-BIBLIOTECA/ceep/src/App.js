import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro'
import ListaDeNotas from './components/ListaDeNotas'
import ListaDeCategorias from './components/ListaDeCategorias'
import './index.css'
import './assets/App.css'
import Categorias from './dados/Categorias'
import ArrayDeNotas from './dados/Notas'


class App extends Component {
  constructor() { //Vou receber no construtor minhas propriedades e passo meu componente que a gente herda, que também precisa dessas props. 
    super()//Preciso chamar o construtor antes do this, porque estou construindo uma classe que estende do componente
    // this.notas = [] //Meu lista de notas recebe agora um array que vai vir a partir de um atributo do meu objeto pai. //A minha lista de notas tem uma propriedade chamada notas que está recebendo um atributo do objeto que chama notas. 
    
    // this.state = {
    //   notas: [],
    //   // categorias: ["Estudos", "Trabalho"],
    // }

    this.categorias = new Categorias ();
    this.notas = new ArrayDeNotas ();

  }
    //No meu this.state categorias ele ainda estava recebendo, porque meu formulário de categorias estava recebendo as categorias pelo estado. Não quero mais que aconteça isso. Quero que ele receba as categorias a partir da minha classe de categorias. Para fazer isso no meu app.js vou instanciar uma nova classe de categorias e uma nova classe de notas, porque tenho essas duas classes e elas precisam se comunicar com a parte de desenho, de renderização, e meu app é o meu ponto de entrada. No meu ponto de entrada vou instanciar esses dois elementos e consigo passar as informações deles para baixo.

  // criarNota(titulo, texto, categoria) {
  //   const novaNota = {
  //     titulo,
  //     texto,
  //     categoria
  //   }
  //   const novoArrayNotas = [...this.state.notas, novaNota] 
  //   const novoEstado = {
  //     notas: novoArrayNotas
  //   }
  //   this.setState(novoEstado)
  // }

    //Na minha inicialização vou falar que tenho no meu estado um notas, uma propriedade notas que vai ser um array vazio, e dentro do criar nota vou chamar o set state, mas para chamar preciso criar um novo estado. Vou deixar aqui do lado, vou falar que o novo estado vai ser igual a um objeto onde o nosso array de notas vai ser igual ao novo array de notas. Esse novo array vai pegar o estado anterior e adicionar a nova nota que eu já criei.
    //Dessa maneira a gente consegue dizer para ele atualizar o estado interno do componente para que o estado notas dele seja compatível com o atributo notas que a gente alterou, o array que já dei o push.Toda vez que crio uma nova nota vou configurar e atribuir um estado novo para esse componente, no caso o app, porque quando atribuo um estado novo através do set state internamente o método consegue gerenciar o método de renderização e conseguir renderizar esse elemento para a gente da maneira correta sem sobrecarregar o navegador, sem que faça nada que ele não queira que a gente faça.

  

  // adicionarCategoria(nomeCategoria){
  //   const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
  //   const novoEstado = {...this.state, categorias:novoArrayCategorias}
  //   this.setState(novoEstado);
  // }
  

  // deletarNota(index){
  //   let arrayNotas = this.state.notas;
  //   arrayNotas.splice(index,1);
  //   this.setState({notas:arrayNotas})
  // }

  render() { //Quando estou trabalhando com classe components, o react vê essa classe e vai tentar renderizar. Para isso, tenho que chamar o método render.
    return ( //A gente coloca sempre quando são múltiplas linhas entre parênteses.
      <section className="conteudo">
        <FormularioCadastro 
        categorias={this.categorias}
        criarNota={this.notas.adicionarNota.bind(this.notas)} />  
        {
        /*É como se estivesse declarando, instanciando um novo formulário através do new, só que não usamos a palavra-chave new, porque o react tem outras coisas que vai fazer por trás dos panos.
        Estou falando que o formulário vai ter uma propriedade, por isso falei que propriedades têm um nome especial, não quis chamar esse this título de this propriedade porque aqui estou falando que meu formulário de cadastro tem uma propriedade do react que chama criar nota que estou associando ao criar nota. Já que ela é uma propriedade, vou receber como parâmetro do meu construtor, e aí o mais comum é chamar isso de props.
        Estou injetando uma dependência no formulário de cadastro, deixo ele muito mais maleável e flexível, porque através dessa propriedade criar nota, se a gente navegar até ele, através da propriedade que estamos recebendo pelo construtor consigo acessar pelo atributo props a propriedade que a gente recebeu do pai, e como é uma função estou pedindo para executar a função que passei como referência.*/
           
        //No criar nota, para criar uma nota, não vou chamar mais o criar nota do meu app.js, vou chamar o criar nota do meu array de notas, vou vir aqui, o criar nota do meu formulário vai ser o this.notas.criarNota. E aí o bind do this não preciso mais. Não preciso fazer mais a associação desse criar notas, dessa função com esse app.js, ele teria que fazer um bind dele com o meu nota. Então, meu bind teria que ser com outra função, não com o app.js
      }
        <main className="conteudo-principal">
          <ListaDeCategorias 
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas 
          apagarNota={this.notas.apagarNota.bind(this.notas)}
          notas={this.notas} 
          />
        </main>
      </section>
    )
  }
}
export default App;
