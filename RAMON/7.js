str = "string"
int = 42
lis = [1,2, null, "a"]

function func(x, argy) {
    valordeRetorno = "any";
    return valordeRetorno + " " + x +  " " + argy
}

function funcSemRetorno() {
    console.log("sem retorno")
}

console.log(
    func(
        42, 'adssadsadsa'
    )
)

ret = funcSemRetorno()
console.log(`ret é ${ret}, ou seja, sem retorno`);
//  -------------------------

obj = {} // objeto vazio

pessoas = {
    nome: "margarida",
}

console.log('----------------------')
console.log(obj)
console.log(pessoas)

console.log(`o nome do objeto é: ${pessoas.nome}`)
console.log(` um objeto vazio é : ${obj.nome}`)

pessoas.idade = getIdade();

console.log(pessoas)

function greeting(a) {
    console.log("Olá! Tudo bem?", a)
}

function getIdade () {
    return 24
}

pessoas.bolinha = greeting;
console.log('-------')
console.log(
    pessoas.nome,    
    pessoas['nome']
)

pessoas.bolinha(33)