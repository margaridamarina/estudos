const BotaoConclui = (atualiza, id) => { /*1*/ //Criar funcao BotaoConclui
    const botaoConclui = document.createElement('button') /*2*/ //Criar uma variavel botaoConclui como botao
    botaoConclui.classList.add('buttons')/*4*/ //Adicionar uma classe buttons ao elemento botaoConclui
    botaoConclui.innerText = 'concluir'/*5*/ //Dizer que tudo que tem dentro da variavel botaoConclui é a palavra concluir
    botaoConclui.addEventListener('click', ()=> concluirTarefa(atualiza, id)) /*3*/ //Adicionar um método que fica escutando o evento click e quando clicamos no botão chamamos a funçãoo concluirTarefa (Criar a função já que ela não existe e só então chamá-la)
    return botaoConclui /*6*/ //Retornar função
}

const concluirTarefa = (atualiza, id) => { /*7*/ //Criar funcao concluirTarefa
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))/*8*/
    tarefasCadastradas[id].concluida=!tarefasCadastradas[id].concluida/*9*/
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))/*10*/
    atualiza()/*11*/
}

export default BotaoConclui /*11*/ //Exportar botão