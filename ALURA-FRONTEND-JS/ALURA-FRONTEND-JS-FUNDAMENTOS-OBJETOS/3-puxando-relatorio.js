console.clear()
const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12543652266",
    email:"andre@email.com",
    fones: ["56868786768786", "5758758785785"],
    dependentes: [
        {
        nome:"Sarah",
        parentesco:"filha",
        dataNasc:"20/03/2011" },
        {
        nome:"Samia Maria",
        parentesco: "filha",
        dataNasc:"04/01/2014"
        }
    ],
    saldo: 100,
    depositar: function (valor)
    {
        this.saldo += valor
    }
}

let relatorio=""; // só pra iniciar a variável

for(let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue //passa direto
    } else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
}

console.log(relatorio)
