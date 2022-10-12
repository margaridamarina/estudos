console.clear()
const clientes = [
    {
    nome:"Andre",
    cpf:"12543652266",
    dependentes: [
        {
        nome:"Sarah",
        parentesco:"filha",
        dataNasc:"20/03/2011" },
        {
        nome:"Samia Maria",
        parentesco: "filha",
        dataNasc:"04/01/2014"
        }],
    },
    {
        nome:"Juliana",
        cpf:"687687686878",
        dependentes: [
            {
            nome:"Sophia",
            parentesco:"filha",
            dataNasc:"30/08/2020" 
        }],
           
    },
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes] //... é spread operator

console.log(listaDependentes)