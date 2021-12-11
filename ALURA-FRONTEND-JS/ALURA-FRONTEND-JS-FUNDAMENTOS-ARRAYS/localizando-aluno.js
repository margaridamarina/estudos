console.clear()

const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediaDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let índice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][índice] + ', sua média é ' + listaDeNotasEAlunos[1][índice]
    } else {
        return 'Aluno não está cadastrado.'
    }
}

console.log(exibeNomeNota("Juliana"))