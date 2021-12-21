import { ordenaDatas, removeDatasRepetidas } from "../service/data.js"
import { criaData } from "./5-criaData.js"
export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]') /*1*/ //percorrer o DOM para buscar essa ul, então document.querySelector, e passamos como argumento o data-list.
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [] /*2*///chamar o método de array que vai inserir sempre o dado que colocarmos no final do array, então tarefas.push, e quem queremos colocar nesse array são os dados //senão tiver nada, inicializar com um array vazio.
    //  Temos que transformar tarefas para ele voltar a ser um objeto, porque é o que passamos. Passamos dados que o cliente pega, é um objeto, e transformamos em string. Temos que transformar isso também em objeto. E como fazemos isso? O JSON.stringify converte para string, e ele tem outro método que chama parse que vai transformar em objeto de volta.
    //vai pra criaData
    lista.innerHTML ="" //limpar input /*22 do criaTarefa*/ //para nao repetir todas as tarefas já que chamamos duas vezes
    const datasUnicas = removeDatasRepetidas(tarefasCadastradas) /*3*/
    ordenaDatas(datasUnicas)/*6*/
    datasUnicas.forEach((dia) => {/*4*///O LocalStorage se comporta como um array, logo, podemos usar métodos de array como o forEach para iterar sobre os itens. 
        lista.appendChild(criaData(dia)) /*5*///Depois, cada item é passado para o componente Tarefa, que vai ser inserido dentro do elemento pai representado por lista.
    })
}