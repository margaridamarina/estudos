import { Tarefa } from "./criaTarefa.js"/*8*/
export const criaData = (data) => {/*1*/
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) ||[]/*5*/
    const dataMoment = moment(data, 'DD/MM/YYYY')
    const dataTopo = document.createElement('li')/*2*/
    const conteudo = `<p class="content.data">${dataMoment.format('DD/MM/YYYY')}</p>` /*3*/

    dataTopo.innerHTML = conteudo/*4*/

    tarefas.forEach((tarefa) => {/*6*/
        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY')/*8*/
        const diff = dataMoment.diff(dia)/*9*/
        if(diff===0){/*10*/ 
            dataTopo.appendChild(Tarefa(tarefa))/*7*/
        }
    })

    return dataTopo
}