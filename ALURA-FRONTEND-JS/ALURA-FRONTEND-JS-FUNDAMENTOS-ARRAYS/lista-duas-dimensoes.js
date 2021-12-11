const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediaDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][1]}`)
// O primeiro índice 0 se refere à primeira array, então é a array alunos. Se formos buscar dentro da array alunos qual é o dado que está no índice 0 dessa array, vamos ver que é João.
// O elemento que está no índice 1 é outra array que é a array média dos alunos e pegar o dado que está no índice 0