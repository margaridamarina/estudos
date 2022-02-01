import React, { Component } from 'react'
import './style.css'

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
        </header> 
        <p className="card-nota_texto">{this.props.texto}</p>
      </section> //se eu escrever uma nova nota com um novo texto e pedir para ele criar uma nova nota com um novo texto está vindo dinamicamente.
    )
  }
}

export default CardNota
