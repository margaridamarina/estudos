const BotaoConclui = () => { /*1*/ //Criar funcao BotaoConclui
    const botaoConclui = document.createElement('button') /*2*/ //Criar uma variavel botaoConclui como botao
    botaoConclui.classList.add('buttons')/*4*/ //Adicionar uma classe buttons ao elemento botaoConclui
    botaoConclui.innerText = 'concluir'/*5*/ //Dizer que tudo que tem dentro da variavel botaoConclui é a palavra concluir
    botaoConclui.addEventListener('click', concluirTarefa) /*3*/ //Adicionar um método que fica escutando o evento click e quando clicamos no botão chamamos a funçãoo concluirTarefa (Criar a função já que ela não existe e só então chamá-la)
    return botaoConclui /*6*/ //Retornar função
}

const concluirTarefa = (evento) => { /*7*/ //Criar funcao concluirTarefa
    const botaoConclui = evento.target /*8*/ //Passar o evento e uma propriedade chamada target para quando clicar saber o alvo do clique
    const tarefaCompleta = botaoConclui.parentElement /*9*/ //Pegando o pai do botao que clicou que é a li (Para que a formatação de tarefa concluída seja aplicada no comprimento total do elemento, precisamos colocar essa classe CSS no elemento pai do parágrafo, ou seja na li), capturamos qual elemento foi clicado, depois utilizamos a propriedade parentElement para subir um nó na árvore
    tarefaCompleta.classList.toggle('done')/*10*///Executar método com a classe do css que executa um rabisco
}

export default BotaoConclui /*11*/ //Exportar botão