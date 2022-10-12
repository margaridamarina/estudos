console.clear()

const salaJS = [7,8,8,7,10,6.5,4,10,7]
const salaJava = [6,5,8,9,5,6]
const salaPython = [7,3.5,8,9.5]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0) // o 0 é o mesmo q o let soma = 0, no reduce não precisa mais
    return somaDasNotas/notasDaSala.length
}

console.log(`Média da sala de JS ${mediaSala(salaJS)}`)
console.log(`Média da sala de Java ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python ${mediaSala(salaPython)}`)

console.log("-----------------------------------------------------------")

const notas = [10,6.5,8,7]

const media = notas.reduce((acum, atual) => 
atual + acum, 0) / notas.length

console.log(media)


 // acumuladores - início: 
//Pronto, essa é minha arrow function, só que o reduce precisa de outro parâmetro, que é um valor inicial desse acumulador. Como aqui é só uma multiplicação, então esse valor inicial vai ser zero.