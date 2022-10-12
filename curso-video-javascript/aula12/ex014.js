var agora = new Date()
var diaSem = agora.getDay()
/*
    Domingo = 0 
    Segunda = 1
    Terça = 2
    Quarta = 3
    Quinta = 4
    Sexta = 5
    Sábado = 6
    */
switch(diaSem) { // testar valores pontuais, não intervalos
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2: 
        console.log('Terça')
        break
    case 4:
        console.log('Quarta')
        break
    case 5: 
        console.log('Quinta')
        break
    case 6: 
        console.log('Sexta')
        break
    default:
        console.log('ERRO: Dia inválido!')
        break 
}

