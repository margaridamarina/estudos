const criaNovaLinha = (nome, email) => {/*6 função para guardar o template que vai receber esses dados da API*/
    const linhaNovoCliente = document.createElement('tr') /*7 criamos a linha*/
    const conteudo = `<td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>` /*6*/
    //campo que vai pegar o nome, o campo que vai pegar o e-mail
    //campo que está dentro de uma lista, que vai ter um link que quando clicarmos vai levar-nos para a página de edição e 
    //botão que vai excluir os dados dos clientes
    //Agora ele entende que isso é string e ele entende que quando tenho alguma coisa dentro das chaves que estão do lado esquerdo e cifrão, isso é JavaScript.
    linhaNovoCliente.innerHTML = conteudo /*8 acessando o interior do elemento e vai colocar o conteúdo lá dentro*/
    return linhaNovoCliente /*9 Agora como é uma função retorno linhaNovoCliente.*/
}

const tabela = document.querySelector('[data-tabela]') /*10  Vou percorrer a árvore do DOM até achar o data-tabela*/

const listaClientes = () => {/*13*/
    const promise = new Promise((resolve, reject) => {/*14  vão lidar com sucesso ou erro da nossa chamada*/
        const http = new XMLHttpRequest() /*1 inicializando objeto - abrir uma conexão com uma API onde estão cadastrados esses dados*/
        //Vamos precisar de alguns métodos para fazer essa comunicação e quem vai fornecer esses métodos para nós é um objeto XMLHttpRequest, ele vai ser o responsável por essa comunicação.
        http.open('GET', 'http://localhost:3000/profile') /*2 abrir a comunicação entre a minha aplicação e a API.
        //O primeiro argumento é o que quero falar com o servidor, então o que vou pedir para ele, e o segundo é o endereço, para onde vou enviar a minha requisição.*/
        http.onload = () => { /*4 ao carregar a página, executar*/
            if(http.status >= 400){ /*15*/
                //verificação para saber se deu tudo ok ou não com a nossa chamada. 
                //400 já é a bad request, a requisição que não deu certo, acima disso também tem erros, são erros relacionados a cliente servidor.
                //se passou de 400 não queremos, então reject, e quem ele vai rejeitar? A resposta.
                //Caso contrário, else, vamos fazer um resolve, passando o http.response.
                reject(JSON.parse(http.response))
            } else {
                resolve(JSON.parse(http.response))
            }
        }
        http.send() /*3 enviar a requisição*/
           
            // const http2 = new XMLHttpRequest()
            // http2.open('GET', 'http://localhost:3000/profile/semanaPassada') /*13*/
            // http2.onload = () => {
            // ..

                // const http3 = new XMLHttpRequest()
                //     http3.open('GET', 'http://localhost:3000/profile/semanaRetrasada') /*14*/
                //     http3.onload = () => {
                //         ..
                // }
                // }
                //Exibir os dados dos clientes que foram cadastrados na semana passada e retrasada.
                //Encadeamos uma sequencia de funcoes assincronas
                //Pela dificuldade de entender criaram a promisse
    })
    // console.log(promise)/*16*/
    return promise
}
listaClientes()/*17*/
.then(data => { /*18 se refere a listaClientes*/
        data.forEach(elemento => { /*18 Agora temos dados no array e vamos ter que percorrer eles para pegar cada um referente a cada um dos clientes.*/
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))/*19  Agora tenho o elemento pai, que é o tbody, e tenho o elemento filho, que é a linha que acabamos de criar. Quero colocar ela dentro desse elemento pai.*/
// Pegando resposta, iterando sobre ela e exibindo na tela
//A resposta é a data, que vai conter os dados. 
//Ou seja, para cada cliente que tenho lá, vou fazer tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email)). 
//Assim conseguimos pegar cada dado referente ao cliente
})})