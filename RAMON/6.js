// escreva uma funcao q receba uma lista como argumento
// retorne o valor da soma de todos os numeros na lista

const lista = [1, 0, 3, 9, 5, 6];

function somartudo(l){
    let soma = 0;
    for (let a = 0; a < l.length; a++) {
        soma += l[a] // soma é igual a soma + 
        // lista[0] + lista [1] + lista [2] + lista [3] + lista [4] + lista [5]
    }
    return soma
}

x = somartudo(lista);
console.log(x);