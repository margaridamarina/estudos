console.clear()
const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12543652266",
    email:"andre@email.com",
    fones: ["56868786768786", "5758758785785"],
    dependentes: [{
        nome:"Sarah",
        parentesco:"filha",
        dataNasc:"20/03/2011"
    }]
}   

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco: "filha",
    dataNasc:"04/01/2014"
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014")

console.log(filhaMaisNova[0].nome)