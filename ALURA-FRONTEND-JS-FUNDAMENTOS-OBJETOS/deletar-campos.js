const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
 aliado: {
   nome: "Saruman",
   classe: "mago"
 },
 status: "desaparecido"
}

delete objPersonagem.aliado

console.log(objPersonagem.aliado) 

//Importante! Veja que o delete remove do objeto o valor da propriedade, assim como a chave.