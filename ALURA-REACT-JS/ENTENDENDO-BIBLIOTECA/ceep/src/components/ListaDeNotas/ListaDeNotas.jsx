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
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto} />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ListaDeNotas
//A gente precisa colocar essa key, essa chave para identificar os elementos da lista. Vou aproveitar que o map passa o index também e vou usar esse index como identificador. Minha key vai ser igual o index do array. Como estou usando uma variável, coloco que atribuo essa chave com o valor dessa variável index que estou retornando do map.

//Estou recebendo um parâmetro e abri o corpo da função. Vou precisar retornar o elemento que quero que ele desenhe, renderize para mim. Vou dar um return, abrir os parênteses porque quero que seja um retorno de múltiplas linhas, e aqui dentro vou colar a li. Se eu formatar ele vai quebrar de novo a linha e temos para cada item aqui vou iterar eles, passar para dentro de uma nota, passar como um parâmetro chamado nota para uma função anônima, e dentro dela vou retornar uma lista com uma div e um card nota.

//Conseguimos iterar sobre arrays, chamar funções do JavaScript, e dentro dessa sintaxe, mas lembrando que algumas operações não vão fazer sentido, não consigo chamar um for diretamente. Preciso ter um array e iterar sobre esse array, lembrando que o map sempre devolve uma lista.

//Ele está pegando cada um dos retornos, jogando dentro de uma lista e devolvendo uma lista, um array de listas para a ul, para conseguir aí sim renderizar. Se eu usasse outra função que existe aqui para iterar sobre um array que é o forEach, ele não me dá um erro, mas também não vai desenhar, porque apesar de estar retornando aqui, o forEach não está juntando numa lista para passar para a ul, então tenho que usar o map para desenhar bonitinho
