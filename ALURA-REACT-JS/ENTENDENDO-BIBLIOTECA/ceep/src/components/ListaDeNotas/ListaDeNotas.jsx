import React, { Component } from 'react'
import CardNota from '../CardNota'
import './style.css'

export class ListaDeNotas extends Component {
  // constructor(props){
  //   super(props)
  // }
  //inutil, o js faz isso só

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          // Quero iterar sobre um array de notas, e esse array vai exibir para mim, vai ter a própria nota que quero exibir.
          //Tudo que estiver entre chaves dentro do return, com essa sintaxe parecida com html, vai ser interpretado como JavaScript, e dessa maneira conseguimos colocar os loops e fazer as interações que a gente precisar, inclusive chamar funções e assim por diante.
          //O jsx é uma extensão do JavaScript, mas não me deixa fazer esse tipo de for. Tem algumas limitações. Não é tudo do JavaScript que você vai conseguir fazer. Se tiver uma função para chamar aqui dentro, poderia chamar numa boa. E se quero percorrer uma lista, ainda mais uma lista que me desse as categorias, posso usar um array e as funções de array para isso.
          //vai pegar cada um desses itens e vai chamar uma função usando o item como parâmetro
          //Se eu usasse outra função que existe aqui para iterar sobre um array que é o for it, ele não me dá um erro, mas também não vai desenhar, porque apesar de estar retornando aqui, o for it não está juntando numa lista para passar para a ul, então tenho que usar o map para desenhar bonitinho

          return (
            <li className="lista-notas_item" key={index}>
              {/*Cada filho de lista deve ter uma chave única. Essa chave é uma propriedade que a gente tem que colocar na nossa lista quando estamos renderizando na parte de loops. A gente coloca ela como se fosse um atributo que nem a gente estava colocando no JavaScript, no html. 
              
              Ele quer que esse atributo seja único para cada elemento que ele está renderizando aqui, isso porque facilita o JavaScript e o react mais para frente entender quais elementos sofrerão alteração ou não e quais ele tem que redesenhar. Ele precisa dessa key porque usa ela para identificar quais são os elementos em cada chave, que tem que ser única justamente por ser um identificador, e se esse elemento sofre alguma alteração o react consegue saber qual ele tem que redesenhar e não redesenha a lista inteira dessa maneira.
              
              Vou aproveitar que o map passa o index também e vou usar esse index como identificador. Minha key vai ser igual o index do array. Como estou usando uma variável, coloco que atribuo essa chave com o valor dessa variável index que estou retornando do map.*/}
              <CardNota
                indice={index}
                apagarNota={this.props.apagarNota}
                titulo={nota.titulo}
                texto={nota.texto}
              />
            </li>
            //Assim estou recebendo nas propriedades o array de notas que veio do pai, que é o estado do map, estou iterando a partir do map e pegando cada uma dessas, para cada nota vou criar uma li, e dentro dessa li vou pegar o card notas e passar para ele como propriedade o título e o texto.
          )
        })}
      </ul>
    )
  }
}

export default ListaDeNotas;
