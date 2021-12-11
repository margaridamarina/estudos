console.clear()

 const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12543652266",
    email:"andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

//console.log(cliente.chave) - não funciona pq com a notação de ponto nao funciona uma coisa que varia
console.log(cliente[chaves[0]])
//const chave = "nome"
//console.log(cliente[chave]) daria no mesmo q o de cima

//console.log(cliente["nome"]) tambem da no mesmo q o de cima
 
chaves.forEach(info=>console.log(cliente[info]))


