const numerosPares = [2,4,6] 
const numerosImpares = [1,3,5] 

// const numeros = [numerosPares, numerosImpares]
const numeros = [...numerosPares, ...numerosImpares] //para impedir que fique uma array de arrays e sim que abra a array

// const num1 = 1
// const num2 = 2
// const [num1, num2] = [1,2] //mostram a mesma coisa do de cima
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5] //mostram a mesma coisa do de cima

console.log(num1, num2, outrosNumeros)

const [nome1 = 'Ju'] = [1] //Se tiver vazio, vai chamar 'Ju'
console.log(nome1)

const pessoa = {
    nome: 'Ju',
    idade: 25
}

const pessoaComTelefone = {
    ...pessoa, //aproveitou o objeto anterior
    telefone: 123123123
}

console.log(pessoa, pessoaComTelefone)

const nome = pessoa.nome
console.log(nome)

// function imprimeDados(dados){
//     const {nome, idade} = dados
//     console.log(nome, idade)
// }

function imprimeDados({nome,idade}){
    console.log(nome, idade)
}
imprimeDados(pessoa)