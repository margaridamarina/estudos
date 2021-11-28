const listaDeChamada =['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

// listaDeChamada.splice(1,2, 'Rodrigo') 
//O primeiro parâmetro é o índice onde vamos começar a alterar incluindo.
//O segundo parâmetro é o número de elementos que vamos remover, vamos remover dois elementos, ou seja, o elemento que está no índice 1 e o seguinte
//O terceiro é o que vai ser colocado no lugar
//O terceiro parâmetro é opcional

listaDeChamada.splice(2,0,'Rodrigo')
console.log(`Lista de chamada: ${listaDeChamada}`)