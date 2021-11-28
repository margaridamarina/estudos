console.clear();
let lista = ['a', 'b', 'c']

for (let i = 0; i < 3; i++){ // interar i de 0 a 2 de 1 em 1
    for (let j = 0; j < 3; j++){
    console.log(`${lista[i]} ${j+1}`)
    }
}

// a1 a2 a3 a4
// b1 b2 b3 b4
// c1 c2 c3 c4


/*console.clear();

for(let i = 1; i < 5; i++){
    for (let j = 1; j < 5; j=j+1){
    console.log(`${j}${i}`)
    }
}

// 11 21 31 41
// 12 22 32 42
// 13 23 33 43
// 14 24 34 44
*/


/*let relatorio=""; // só pra iniciar a variável

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

console.log(relatorio)*/

/*let lista = ['a', 'b', 'c']
listadalista = 0
for (let i = 1; i < 5; i++){
    for (let info in lista){
        listadalista += `${info}${lista[info]}`
    }
    console.log(listadalista, `${i}`)
}*/
