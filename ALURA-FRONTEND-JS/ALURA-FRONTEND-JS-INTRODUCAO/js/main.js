var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    if(peso<=0 || peso>=1000){
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido")
    }
    
    if(altura<=0 || altura>= 3.00){
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido")
    }
    
    if(alturaEhValida && pesoEhValido){
        var imc = peso / (altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

const botaoAdicionar = document.querySelector("#adicionar-paciente");


botaoAdicionar.addEventListener("click", function anon (event){
    event.preventDefault();
    const form = document.querySelector("#form-adiciona")
    
    const nome = form.nome.value; //nome, peso, altura e gordura ja vieram pois fazem parte de form
    const peso = form.peso.value;
    const altura = form.altura.value;
    const gordura = form.gordura.value;

    const pacienteTr = document.createElement("tr");
    
    const nomeTd = document.createElement("td");
    const pesoTd = document.createElement("td");
    const alturaTd = document.createElement("td");
    const gorduraTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    const tabela = document.querySelector("#tabela-pacientes")
    
    tabela.appendChild(pacienteTr);


})

