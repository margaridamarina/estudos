import { clienteService } from '../../service/cliente-service'

const criaNovaLinha = (nome, email) => {
  /*6 função para guardar o template que vai receber esses dados da API*/
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
  linhaNovoCliente.innerHTML =
    conteudo /*8 acessando o interior do elemento e vai colocar o conteúdo lá dentro*/
  return linhaNovoCliente /*9 Agora como é uma função retorno linhaNovoCliente.*/
}

const tabela =
  document.querySelector(
    '[data-tabela]'
  ) /*10  Vou percorrer a árvore do DOM até achar o data-tabela*/

clienteService
  .listaClientes() /*17*/
  .then(data => {
    /*18 se refere a listaClientes*/
    data.forEach(elemento => {
      /*18 Agora temos dados no array e vamos ter que percorrer eles para pegar cada um referente a cada um dos clientes.*/
      tabela.appendChild(
        criaNovaLinha(elemento.nome, elemento.email)
      ) /*19  Agora tenho o elemento pai, que é o tbody, e tenho o elemento filho, que é a linha que acabamos de criar. Quero colocar ela dentro desse elemento pai.*/
      // Pegando resposta, iterando sobre ela e exibindo na tela
      //A resposta é a data, que vai conter os dados.
      //Ou seja, para cada cliente que tenho lá, vou fazer tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email)).
      //Assim conseguimos pegar cada dado referente ao cliente
    })
  })
