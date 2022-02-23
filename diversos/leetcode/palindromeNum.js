//Given an integer x, return true if x is palindrome integer.

//An integer is a palindrome when it reads the same backward as forward. 

//For example, 121 is palindrome while 123 is not.
console.clear()

// var isPalindrome = function (x) {
//     let text = x.toString()
//     normal = text
//     console.log(text)
//     inverso = ''
//     for (let i = text.length-1; i >= 0; i--){
//         console.log(i)
//         inverso += normal[i]
//     }
//     return inverso == normal
// }

// const valor = isPalindrome (221122)
// console.log (valor)




// [2,2, 1, 2, 2]


var isPalindrome = function (x) {
    const text = x.toString();
    const tamanhoTexto = text.length;

    let posicaoMeio;

    if (tamanhoTexto%2==0){
        posicaoMeio = tamanhoTexto / 2
    }
    else {
        posicaoMeio = (tamanhoTexto - 1) / 2;
    }

    for (let indiceIndo = tamanhoTexto - 1; indiceIndo >= 0; indiceIndo--) {
        const indiceVoltando = (tamanhoTexto - 1) - indiceIndo;
        const isMirroed = text[indiceVoltando] == text[indiceIndo];

        if (!isMirroed) {
            return false
        }
        if (indiceIndo < posicaoMeio){
            return true
        }

    }
    return true
}

console.log(isPalindrome(343))