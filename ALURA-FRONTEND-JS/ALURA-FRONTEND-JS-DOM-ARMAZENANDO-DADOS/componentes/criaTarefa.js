import { carregaTarefa } from "./carregaTarefa.js"
import BotaoConclui from "./concluiTarefa.js"
import BotaoDeleta from "./deletaTarefa.js"
//Reorganizou o código, dividiu em duas funções: uma que vai trabalhar com dados e uma que vai trabalhar só com a visualização
let tarefas = [] //Vamos colocar o que criarmos, as tarefas, os dados, dentro desse array chamado tarefas.

export const handleNovoItem = (evento) => {
    
    evento.preventDefault()/*3*/ //Prevenir que o formulário envie esse input para servidores Web, que é o comportamento padrão dele
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [] //chamar o método de array que vai inserir sempre o dado que colocarmos no final do array, então tarefas.push, e quem queremos colocar nesse array são os dados //senão tiver nada, inicializar com um array vazio
    
    const input = document.querySelector('[data-form-input]')/*4*/ //Passar a primeira referencia do elemento que tem o atributo data-form-input para a variavel input
    const valor = input.value /*5*/ //Pegar o valor do elemento input

    const calendario = document.querySelector('[data-form-date]')/*15*/ 
    const data = moment(calendario.value)/*16*/
    const dataFormatada = data.format('DD/MM/YYYY')/*17*/

    const dados = { //estratégia de armazenar esses valores dentro de um objeto e passar eles para a outra função.
        valor,
        dataFormatada
    }
    const tarefasAtualizadas = [...tarefas, dados] //pegar tudo que tem dentro da tarefa + dados
   
    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas)) //o LocalStorage só aceita guardar informações no formato de strings
    input.value = " " /*14*/ //Limpar o valor de input depois de executada a tarefa
    carregaTarefa()

}

export const Tarefa = ({valor, dataFormatada}) => { //Aqui era const criarTarefa = (evento) => {//Quem vou passar aqui dentro do criarTarefa? Exatamente, dados. Vou optar por usar object destruction para deixar mais claro quais são os parâmetros que estou passando dentro da tarefa. Faço chaves e valor e dataFormatada.
    const tarefa = document.createElement('li')/*7*/ //Criar uma variavel tarefa como list item
    tarefa.classList.add('task')/*10*/ //Adicionar uma classe task ao elemento tarefa
    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`/*8 valor*/ /*16 dataFormatada*/ //Criar uma variavel conteudo com uma string que tem uma notacao de um elemento html com o conteudo de valor  com a classe content
    tarefa.innerHTML = conteudo/*9*/ //Dizer que tudo que tem dentro da variavel tarefa é o conteudo da variavel conteudo
    
    tarefa.appendChild(BotaoConclui())/*12*/ //Adicionar uma nova child com o retorno da funcao BotaoConclui no final de tarefa
    tarefa.appendChild(BotaoDeleta())/*13*/ //Adicionar uma nova child com o retorno da funcao BotaoDeleta no final de tarefa

    return tarefa
}