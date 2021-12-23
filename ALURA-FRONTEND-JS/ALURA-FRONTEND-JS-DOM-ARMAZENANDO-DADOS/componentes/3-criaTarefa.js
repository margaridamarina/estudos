import { carregaTarefa } from "./4-carregaTarefa.js"
import BotaoConclui from "./1-concluiTarefa.js"
import BotaoDeleta from "./2-deletaTarefa.js"
//Reorganizou o código, dividiu em duas funções: uma que vai trabalhar com dados e uma que vai trabalhar só com a visualização
let tarefas = []/*19*/ //Vamos colocar o que criarmos, as tarefas, os dados, dentro desse array chamado tarefas.

export const handleNovoItem = (evento) => {
    
    evento.preventDefault()/*3*/ //Prevenir que o formulário envie esse input para servidores Web, que é o comportamento padrão dele
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [] /*22*///chamar o método de array que vai inserir sempre o dado que colocarmos no final do array, então tarefas.push, e quem queremos colocar nesse array são os dados //senão tiver nada, inicializar com um array vazio.
    //  Temos que transformar tarefas para ele voltar a ser um objeto, porque é o que passamos. Passamos dados que o cliente pega, é um objeto, e transformamos em string. Temos que transformar isso também em objeto. E como fazemos isso? O JSON.stringify converte para string, e ele tem outro método que chama parse que vai transformar em objeto de volta.
    const input = document.querySelector('[data-form-input]')/*4*/ //Passar a primeira referencia do elemento que tem o atributo data-form-input para a variavel input
    const valor = input.value /*5*/ //Pegar o valor do elemento input
    // E aprendemos que localStorage aceita chave valor em formato de string.
    const calendario = document.querySelector('[data-form-date]')/*15*/ 
    const data = moment(calendario.value)/*16*/
    const horario = data.format('HH:mm')/*26*/
    const dataFormatada = data.format('DD/MM/YYYY')/*17*/
    const concluida = false /*23*/ // estado atual do botão de concluir, ou seja, se o botão estiver false ele não foi apertado, se estiver true ele foi apertado e vamos colocar o estilo do risco.

    const dados = /*18*/{ //estratégia de armazenar esses valores dentro de um objeto e passar eles para a outra função.
        valor,
        dataFormatada,
        horario,/*26*/
        concluida,
    }
    
    const tarefasAtualizadas = [...tarefas, dados] /*20*///pegar -tudo (por isso os ...)-  que tem dentro da tarefa + dados novos
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))/*21*///O que quero agora é pegar o que o usuário digitou e guardar no localStorage. Para isso vamos usar um método chamado setItem. Ele espera dois parâmetros, chave e valor. Tanto a chave quanto o valor tem que ser em formato de string, lembrando um objeto JSON. ////o LocalStorage só aceita guardar informações no formato de strings
    // Tivemos que utilizar o objeto JSON, utilizando essa propriedade stringify, que vai converter o objeto em string para ser aceito. Quando formos pegar esses dados de volta, temos que fazer essa transformação novamente, então utilizamos o parse para pegar as strings e voltar ao formato original. 
    input.value = " " /*14*/ //Limpar o valor de input depois de executada a tarefa
    
    carregaTarefa()/*21*/ //Toda vez que ele for no handleNovoItem preciso chamar carregarTarefa.

}

export const Tarefa = ({valor, horario, concluida}, id) => {/*24 só para o concluida*/ /*7*///Aqui era const criarTarefa = (evento) => {//Quem vou passar aqui dentro do criarTarefa? Exatamente, dados. Vou optar por usar object destruction para deixar mais claro quais são os parâmetros que estou passando dentro da tarefa. Faço chaves e valor e dataFormatada.
    const tarefa = document.createElement('li')/*7*/ //Criar uma variavel tarefa como list item
    
    const conteudo = `<p class="content">${horario} * ${valor}</p>`/*8 valor*/ /*27 horario*/ //Criar uma variavel conteudo com uma string que tem uma notacao de um elemento html com o conteudo de valor  com a classe content
    if(concluida){/*25*/
       tarefa.classList.add('done') /*26*/
    }
    tarefa.classList.add('task')/*10*/ //Adicionar uma classe task ao elemento tarefa
    tarefa.innerHTML = conteudo/*9*/ //Dizer que tudo que tem dentro da variavel tarefa é o conteudo da variavel conteudo
    
    tarefa.appendChild(BotaoConclui(carregaTarefa, id))/*12*/ //Adicionar uma nova child com o retorno da funcao BotaoConclui no final de tarefa
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id))/*13*/ //Adicionar uma nova child com o retorno da funcao BotaoDeleta no final de tarefa

    return tarefa
}