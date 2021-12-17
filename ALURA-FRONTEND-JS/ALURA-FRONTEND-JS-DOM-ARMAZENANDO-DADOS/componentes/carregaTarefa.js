import { ordenaDatas, removeDatasRepetidas } from "../service/data.js"
import { criaData } from "./criaData.js"
export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]') /*1*/ //percorrer o DOM para buscar essa ul, então document.querySelector, e passamos como argumento o data-list.
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []
    lista.innerHTML ="" //limpar input
    const datasUnicas = removeDatasRepetidas(tarefasCadastradas)
    datasUnicas.forEach((dia) => {//O LocalStorage se comporta como um array, logo, podemos usar métodos de array como o forEach para iterar sobre os itens. 
        lista.appendChild(criaData(dia)) //Depois, cada item é passado para o componente Tarefa, que vai ser inserido dentro do elemento pai representado por lista.
    })
}