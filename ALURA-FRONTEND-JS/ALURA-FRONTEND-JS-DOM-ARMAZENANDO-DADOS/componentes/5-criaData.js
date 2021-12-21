import { Tarefa } from "./3-criaTarefa.js"/*9*/
export const criaData = (data) => {/*1*/
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) ||[]/*6*////chamar o método de array que vai inserir sempre o dado que colocarmos no final do array, então tarefas.push, e quem queremos colocar nesse array são os dados //senão tiver nada, inicializar com um array vazio.
    //  Temos que transformar tarefas para ele voltar a ser um objeto, porque é o que passamos. Passamos dados que o cliente pega, é um objeto, e transformamos em string. Temos que transformar isso também em objeto. E como fazemos isso? O JSON.stringify converte para string, e ele tem outro método que chama parse que vai transformar em objeto de volta.
    const dataMoment = moment(data, 'DD/MM/YYYY')/*11*/
    const dataTopo = document.createElement('li')/*2*/
    const conteudo = `<p class="content-data">${dataMoment.format('DD/MM/YYYY')}</p>` /*3*/

    dataTopo.innerHTML = conteudo/*4*/

    tarefas.forEach((tarefa, id) => {/*7*/
        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY')/*10*/
        const diff = dataMoment.diff(dia)/*12*/
        if(diff===0){/*12*/ //Se a data der 0, quer dizer que a data já existe, então ao invés de criar um bloco novo, com uma data igual ele está fazendo aqui, ele vai simplesmente colocar a data embaixo do dia respectivo.
            dataTopo.appendChild(Tarefa(tarefa, id))/*8*/
        }
    })

    return dataTopo /*5*/
}