import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro'
import ListaDeNotas from './components/ListaDeNotas'
import './index.css'

class App extends Component {
  constructor() { //Vou receber no construtor minhas propriedades e passo meu componente que a gente herda, que também precisa dessas props. 
    super()//Preciso chamar o construtor antes do this, porque estou construindo uma classe que estende do componente
    this.notas = [] //Meu lista de notas recebe agora um array que vai vir a partir de um atributo do meu objeto pai. //A minha lista de notas tem uma propriedade chamada notas que está recebendo um atributo do objeto que chama notas. 
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = {
      titulo,
      texto
    }
    const novoArrayNotas = [...this.state.notas, novaNota] //Na minha inicialização vou falar que tenho no meu estado um notas, uma propriedade notas que vai ser um array vazio, e dentro do criar nota vou chamar o set state, mas para chamar preciso criar um novo estado. Vou deixar aqui do lado, vou falar que o novo estado vai ser igual a um objeto onde o nosso array de notas vai ser igual ao novo array de notas. Esse novo array vai pegar o estado anterior e adicionar a nova nota que eu já criei.
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)//Dessa maneira a gente consegue dizer para ele atualizar o estado interno do componente para que o estado notas dele seja compatível com o atributo notas que a gente alterou, o array que já dei o push.Toda vez que crio uma nova nota vou configurar e atribuir um estado novo para esse componente, no caso o app, porque quando atribuo um estado novo através do set state internamente o método consegue gerenciar o método de renderização e conseguir renderizar esse elemento para a gente da maneira correta sem sobrecarregar o navegador, sem que faça nada que ele não queira que a gente faça.
  }

  render() { //Quando estou trabalhando com classe components, o react vê essa classe e vai tentar renderizar. Para isso, tenho que chamar o método render.
    return ( //A gente coloca sempre quando são múltiplas linhas entre parênteses.
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />  {/*É como se estivesse declarando, instanciando um novo formulário através do new, só que não usamos a palavra-chave new, porque o react tem outras coisas que vai fazer por trás dos panos.
        Estou falando que o formulário vai ter uma propriedade, por isso falei que propriedades têm um nome especial, não quis chamar esse this título de this propriedade porque aqui estou falando que meu formulário de cadastro tem uma propriedade do react que chama criar nota que estou associando ao criar nota. Já que ela é uma propriedade, vou receber como parâmetro do meu construtor, e aí o mais comum é chamar isso de props.
        Estou injetando uma dependência no formulário de cadastro, deixo ele muito mais maleável e flexível, porque através dessa propriedade criar nota, se a gente navegar até ele, através da propriedade que estamos recebendo pelo construtor consigo acessar pelo atributo props a propriedade que a gente recebeu do pai, e como é uma função estou pedindo para executar a função que passei como referência.*/}
        
        <ListaDeNotas notas={this.state.notas} />
      </section>
    )
  }
}
export default App
