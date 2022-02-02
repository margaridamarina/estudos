import React, { Component } from 'react'
import './style.css'
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"

class CardNota extends Component {
  apagar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }
  
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)}/>
        </header> 
        <p className="card-nota_texto">{this.props.texto}</p>
      </section> //se eu escrever uma nova nota com um novo texto e pedir para ele criar uma nova nota com um novo texto está vindo dinamicamente.
    )
  }
}

export default CardNota
