// A função ola deve receber uma lista
// de nomes como argumento
// e dizer Olá, para cada uma das pessoas

// E.g:
// Olá, Ramon
// Olá, joão

lista = ['Ramon', 'João', "Margoh", "peu", "mari", "julie"]


function ola(lista) {
    console.log(`Olá, ${(lista[0])} !`)
    console.log(`Olá, ${(lista[1])} !`)
    console.log(`Olá, ${(lista[2])} !`)
    console.log(`Olá, ${(lista[3])} !`)
    console.log(`Olá, ${(lista[4])} !`)
    console.log(`Olá, ${(lista[5])} !`)
}

ola(lista)