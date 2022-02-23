const a = [{"id": 1, "nome":"Catarina", "cpf":"12345678911"}, {"id": 2, "nome":"Juliana", "cpf":"12345678910"}]

const listaClientes = document.querySelector("#clientes")

fetch(a)
  // .then(dados => dados.json())
  .then(resposta => {
    a.forEach(cliente => listaClientes.innerHTML += 
      (`<li>nome: ${cliente.nome} cpf: ${cliente.cpf}<li>`))
  })
  .catch(resposta => listaClientes.innerHTML = "<p>erro</p>")