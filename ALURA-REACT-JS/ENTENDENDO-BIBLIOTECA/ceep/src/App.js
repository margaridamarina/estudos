import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro'
import ListaDeNotas from './components/ListaDeNotas'
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    )
  }
}
//new FormularioCadastro();
//Ele vai associar essa tag, esse novo elemento que a gente está criando com o que está por trás dos panos.
export default App;
