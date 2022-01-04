// var pacientes = document.querySelectorAll(".paciente");

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("Fui clicado com um duplo clique");
//         this.remove();
//     });
// });

//esse não funciona para os novos pacientes que forem adicionados após o carregamento da página

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut"); 
    setTimeout(function(){
        event.target.parentNode.remove(); //demora um pouquinho antes de remover
    }, 500);
    // ou
    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;
    // paiDoAlvo.remove();
})



