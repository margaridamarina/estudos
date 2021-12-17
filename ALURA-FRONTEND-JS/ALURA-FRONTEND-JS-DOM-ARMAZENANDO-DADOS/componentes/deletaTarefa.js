const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button') /*1*/ //Criar uma variavel botaoDeleta como botao
    // botaoDeleta.classList.add('buttons')/*4*/ //Adicionar uma classe buttons ao elemento botaoDeleta
    botaoDeleta.innerText = 'deletar'/*5*/ //Dizer que tudo que tem dentro da variavel botaoDeleta é a palavra concluir
    botaoDeleta.addEventListener('click', deletarTarefa) /*2*/ //Adicionar um método que fica escutando o evento click e quando clicamos no botão chamamos a funçãoo concluirTarefa (Criar a função já que ela não existe e só então chamá-la)
    return botaoDeleta /*3*/ //Retornar função
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target /*6*/ //Passar o evento e uma propriedade chamada target para quando clicar saber o alvo do clique
    const tarefaCompleta = botaoDeleta.parentElement/*7*/ //Pegando o pai do botao que clicou que é a li
    tarefaCompleta.remove()/*8*/ //Remover tarefa
    return botaoDeleta
}

export default BotaoDeleta /*9*/ //Exportar botão