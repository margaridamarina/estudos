import { handleNovoItem } from "./componentes/criaTarefa.js"
import { carregaTarefa } from "./componentes/carregaTarefa.js"

const novaTarefa = document.querySelector('[data-form-button]')/*1*/ //Passar a primeira referencia do elemento que tem o atributo data-form-button para a variavel novaTarefa
novaTarefa.addEventListener('click', handleNovoItem) /*2*/ //Adicionar um método que fica escutando o evento click e quando clicamos no botão chamamos a função criarTarefa (Criar a função já que ela não existe e só então chamá-la)

carregaTarefa()

