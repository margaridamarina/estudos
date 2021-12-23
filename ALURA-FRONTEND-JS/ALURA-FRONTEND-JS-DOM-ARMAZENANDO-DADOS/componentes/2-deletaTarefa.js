const deletarTarefa = (atualiza, id) => {
    const index = id /*10*/
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))/*6*/
    tarefasCadastradas.splice(index, 1) /*9 remover o item do localStorage. O splice vai receber um ponto inicial e até onde quero remover. Quero remover do meu index, que é do id da minha tarefa, e coloco 1 indicando que vou remover a partir dele ele mesmo*/
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))/*8 fazemos alguma transformação e devolvemos para o local storage*/
    atualiza()/*7*/
    //para colocar itens no localStorage utilizamos setItem, para pegar os itens do localStorage usamos getItem
}

const BotaoDeleta = (atualiza, id) => {
    const botaoDeleta = document.createElement('button') /*1*/ //Criar uma variavel botaoDeleta como botao
    // botaoDeleta.classList.add('buttons') //Adicionar uma classe buttons ao elemento botaoDeleta
    botaoDeleta.innerText = 'deletar'/*4*/ //Dizer que tudo que tem dentro da variavel botaoDeleta é a palavra concluir
    botaoDeleta.addEventListener('click', () => deletarTarefa(atualiza,id)) /*2*/ //Adicionar um método que fica escutando o evento click e quando clicamos no botão chamamos a funçãoo concluirTarefa (Criar a função já que ela não existe e só então chamá-la)
    return botaoDeleta /*3*/ //Retornar função
}


export default BotaoDeleta /*5*/ //Exportar botão