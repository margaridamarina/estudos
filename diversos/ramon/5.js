// A função ola deve receber uma lista
// de nomes como argumento
// e dizer Olá, para cada uma das pessoas

// E.g:
// Olá, Ramon
// Olá, joão

lista = ['Ramon', 'João', "Margoh", "Peu", "Mari", "Julie"];

function ola(lista) {
/* for (let a = 0; a < lista.length; a++){
        console.log(`Olá, ${lista[a]} !`);
    }
}
*/
// a < lista.length --> enquanto a for menor que o tamanho de lista
// a ++ --> incrementar 1 no valor de a

/*for(let a of lista) {
    console.log(`Olá, ${a} !`);
}
*/

for(let a in lista) {
    console.log(`Olá, ${lista[a]} !`);
}
}

ola(lista)

