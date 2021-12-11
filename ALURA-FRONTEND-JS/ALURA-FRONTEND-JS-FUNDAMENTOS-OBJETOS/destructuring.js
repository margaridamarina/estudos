const numerosPares = [2,4,6]
const numerosImpares = [1,3,5]
const numeros = [...numerosPares, ...numerosImpares]
console.log(numeros)

const [num1, num2, ...outrosNumeros] = [1,2,3,4,5]
console.log(num1, num2, outrosNumeros)

const [nome1 = 'Ju'] = []
console.log(nome1)

const pessoa = {
    nome:'Ju',
    idade: 25
}
const pessoaComTelefone = {...pessoa, telefone: 32653656
}
console.log(pessoa, pessoaComTelefone)

const {nome} = pessoa
console.log(nome) 

function imprimeDados(dados){
    console.log(dados)
}
imprimeDados(pessoa)

function imprimeDados(dados){
    const{nomes, idade} = dados
    console.log(nome, idade)
}
imprimeDados(pessoa)

function imprimeDados({nomes, idade}){
    console.log(nome, idade)
}
imprimeDados(pessoa)