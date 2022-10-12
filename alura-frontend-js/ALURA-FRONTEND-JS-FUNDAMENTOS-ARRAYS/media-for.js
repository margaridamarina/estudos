console.clear()

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0 // do lado de fora pq se for dentro do for, toda vez que passar por ela vai estar descartando a variavel antiga e declarando uma nova

for(let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
}

let media = somaDasNotas/notas.length

console.log(media)