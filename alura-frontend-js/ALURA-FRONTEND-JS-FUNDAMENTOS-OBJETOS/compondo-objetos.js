console.clear()

 const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12543652266",
    email:"andre@email.com",
    fones: ["56868786768786", "5758758785785"]
}

cliente.dependente = {
    nome:"Sarah",
    parentesco:"filha",
    dataNasc:"20/03/2011"
}

console.log(cliente)

cliente.dependente.nome = "Sarah Silva"

console.log(cliente)