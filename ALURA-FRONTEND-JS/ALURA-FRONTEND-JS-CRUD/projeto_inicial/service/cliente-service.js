const listaClientes = () => {
  /*13*/
  return fetch(`http://localhost:3000/profile`).then(resposta => {
    return resposta.json()
  })
  // fetch é um método global da interface da fetch API, a fetch API possui vários métodos que podemos utilizar, a fetch é um dos métodos utilizados da interface da fetch API, então aqui por padrão a fetch já faz um get, e já me devolve uma promise. Não precisa instanciar mais nada, simplesmente retorno a fetch. Como ele me devolve uma promise, eu já vou trabalhar com essa resposta. Faço aqui um .then, falo que resposta e passo uma arrow function, executando resposta return, ‘return resposta .json’.A resposta é um texto e temos que fazer .json para ele virar um objeto JavaScript válido.
}

export const clienteService = {
    listaClientes
}