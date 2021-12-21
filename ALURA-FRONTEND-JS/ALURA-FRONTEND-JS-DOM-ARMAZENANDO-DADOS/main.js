import { handleNovoItem } from "./componentes/3-criaTarefa.js" //entre {} importa só a função /*3*/
import { carregaTarefa } from "./componentes/4-carregaTarefa.js" /*4*/
//ponto de execução da aplicação
const novaTarefa = document.querySelector('[data-form-button]')/*1*/ //Passar a primeira referencia do elemento que tem o atributo data-form-button para a variavel novaTarefa
novaTarefa.addEventListener('click', handleNovoItem) /*2*/ //Adicionar um método que fica escutando o evento click e quando clicamos no botão chamamos a função criarTarefa (Criar a função já que ela não existe e só então chamá-la)

carregaTarefa() /*5*/ //Depois que ele fizer a parte que ele vai no handleNovoItem, percorre nossa aplicação toda, ele vai carregar as tarefas para mim.

