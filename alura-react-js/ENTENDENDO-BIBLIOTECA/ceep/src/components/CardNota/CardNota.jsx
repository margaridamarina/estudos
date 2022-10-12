import React, { Component } from 'react'
import './style.css'
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"

class CardNota extends Component {
  apagar(){
    const indice = this.props.indice; // Estou pegando na propriedade que chamei de índice, que recebi, minha lista de notas está passando essa propriedade e estou atribuindo essa variável, porque quando chamo minha função de apagar nota consigo passar esse índice para ele saber quem é o card e apagar só o card certo.
    this.props.apagarNota(indice);
  }
  
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)}/>
          <h4>{this.props.categoria}</h4>
        </header> 
        <p className="card-nota_texto">{this.props.texto}</p>
      </section> //se eu escrever uma nova nota com um novo texto e pedir para ele criar uma nova nota com um novo texto está vindo dinamicamente.
    )
  }
}

export default CardNota
