const deletarTarefa = (atualiza, id) => {
    
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))/*6*/
    atualiza()
}

const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button') /*1*/ //Criar uma variavel botaoDeleta como botao
    // botaoDeleta.classList.add('buttons') //Adicionar uma classe buttons ao elemento botaoDeleta
    botaoDeleta.innerText = 'deletar'/*4*/ //Dizer que tudo que tem dentro da variavel botaoDeleta é a palavra concluir
    botaoDeleta.addEventListener('click', deletarTarefa) /*2*/ //Adicionar um método que fica escutando o evento click e quando clicamos no botão chamamos a funçãoo concluirTarefa (Criar a função já que ela não existe e só então chamá-la)
    return botaoDeleta /*3*/ //Retornar função
}


export default BotaoDeleta /*5*/ //Exportar botão