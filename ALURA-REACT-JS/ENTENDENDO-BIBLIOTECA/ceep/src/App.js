import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro'
import ListaDeNotas from './components/ListaDeNotas'
import './index.css'

class App extends Component {
  constructor() {
    super()
    this.notas = []
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = {
      titulo,
      texto
    }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    )
  }
}
export default App

//new Forumario({notas:this.notas})

//new FormularioCadastro();
//Ele vai associar essa tag, esse novo elemento que a gente está criando com o que está por trás dos panos.

// Estou injetando uma dependência no formulário de cadastro, deixo ele muito mais maleável e flexível, porque através dessa propriedade criar nota, se a gente navegar até ele, através da propriedade que estamos recebendo pelo construtor consigo acessar pelo atributo props a propriedade que a gente recebeu do pai, e como é uma função estou pedindo para executar a função que passei como referência.

//O que eu vou fazer é que no meu app.js, na hora que eu for criar um formulário falo que na hora que for criar uma nota quero que chame, vou associar, o criar nota que tenho aqui. Estou falando que o formulário vai ter uma propriedade, por isso falei que propriedades têm um nome especial, não quis chamar esse this título de this propriedade porque aqui estou falando que meu formulário de cadastro tem uma propriedade do react que chama criar nota que estou associando ao criar nota. E já que defini que quero ter essa propriedade, como associo ela ao meu formulário?

//Já que ela é uma propriedade, vou receber como parâmetro do meu construtor, e aí o mais comum é chamar isso de props. Vou receber no construtor minhas propriedades e passo meu componente que a gente herda, que também precisa dessas props. E uma vez que tenho elas consigo acessar diretamente. Então, no criar nota vou chamar o this props, essa propriedade que a gente tem criar nota, que a gente criou como propriedade. Esse criar nota vai ser referenciado por essa propriedade que a gente criou.

//Todo componente do nosso react tem duas propriedades básicas: o props e o state
//É uma propriedade especial, toda vez que ela é atualizada, e ela está sendo também gerenciada pelo react, o react vai chamar o método render desse componente que foi alterado o estado dele. Como é uma propriedade especial do react não posso chamar o state diretamente também, porque é a mesma coisa de chamar o render.

//Para alterar o estado, e ele funcionar diretamente, vai usar um setter. Aquele assessor que se você não conhece a gente viu nos cursos de orientação a objeto, mas ele não tem um setter daquela maneira. Vou ter que chamar o this.setState. Mas ele é um assessor. A partir do momento em que chamo tenho que passar o novo estado desse componente. No nosso caso, o novo estado, e por padrão costumamos colocar um objeto dentro. Ele vai iniciar como sendo um objeto, porque um objeto consigo adicionar coisas facilmente. Se eu passasse diretamente o this.notas não daria certo.

//Vou colocar o novo estado que tenho as notas iguais this.notas. Dessa maneira a gente consegue dizer para ele atualizar o estado interno do componente para que o estado notas dele seja compatível com o atributo notas que a gente alterou, o array que já dei o push.

//Se eu fizer isso, e a gente voltar e começar a criar cards, ele está dinamicamente aparecendo na tela, posso criar quantos cards eu quiser porque está criando os cards dinamicamente e a partir do meu estado. Toda vez que crio uma nova nota vou configurar e atribuir um estado novo para esse componente, no caso o app, porque quando atribuo um estado novo através do set state internamente o método consegue gerenciar o método de renderização e conseguir renderizar esse elemento para a gente da maneira correta sem sobrecarregar o navegador, sem que faça nada que ele não queira que a gente faça.

// Além disso, se eu chamar esse set state sem mudar as minhas notas, ele não vai ficar pensando em rerenderizar, por mais que esteja chamando o set state, dessa maneira estamos atualizando estado e ele vai internamente gerenciar essa renderização.

//O mais comum é na minha inicialização vou falar que tenho no meu estado um notas, uma propriedade notas que vai ser um array vazio, e dentro do criar nota vou chamar o set state, mas para chamar preciso criar um novo estado. Vou deixar aqui do lado, vou falar que o novo estado vai ser igual a um objeto onde o nosso array de notas vai ser igual ao novo array de notas. Esse novo array vai pegar o estado anterior e adicionar a nova nota que eu já criei.

// Então, meu const novo array de notas vai pegar o estado anterior, this.state.notas, e quero adicionar minha nova nota. Só que quero fazer isso em um array, vou usar o stretch operator e vou associar uma nova nota no final. Tenho esse novo array que pode ser usado embaixo. Nesse novo estado aí sim vou saber do meu set state e não preciso mais desse push.
