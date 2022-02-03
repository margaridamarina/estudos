import React, { Component } from 'react'
import './style.css'

class ListaDeCategorias extends Component {
  state = {}
  //// Se eu deleto uma categoria, preciso avisar tanto meu formulário que aquela categoria que estava aqui no estado não existe mais, quanto todos os cards que têm aquela categoria associada que a categoria não existe mais. Então, dá para ver como esse gerenciamento de estado começa a ficar mais complicado se eu tivesse tudo junto no lista de categorias, porque não é só esse elemento visual que vai usar essa informação. Ele vai estar associado a outros elementos também, à informação. Por isso a gente geralmente começa a abstrair nossas informações para os elementos em um nível mais acima, os elementos pais.

  _handleEventoInput(evento) {
    if (evento.key == 'Enter') {
      let valorCategoria = evento.target.value
      this.props.adicionarCategoria(valorCategoria)
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, index) => {
            return (
              <li key="index" className="lista-categorias_item">
                {categoria}
              </li>
            )
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    )
  }
}

export default ListaDeCategorias;
