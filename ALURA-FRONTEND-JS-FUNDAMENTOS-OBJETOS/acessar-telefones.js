console.clear()

 const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12543652266",
    email:"andre@email.com",
    fones: ["56868786768786", "5758758785785"]
}

cliente.fones.forEach(fone => console.log(fone))
// já que nao precisa retornar nada pode usar o foreach
