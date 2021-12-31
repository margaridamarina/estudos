const botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function anon (event){
    event.preventDefault();
    
    const form = document.querySelector("#form-adiciona");
    const paciente = obtemPacienteDoFormulario(form);
    
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros)
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    const tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr);
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = ""
})

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML=""
    erros.forEach(function(erro){
        //pra cada erro, pra cada item do array, fazer algo com ele, executar a funcao, recebe o item, cria uma li, preenche com o valor do erro e coloca dentro da ul
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);

    });
}


function obtemPacienteDoFormulario(form){
    //extraindo informacoes do paciente do form
    //nome, peso, altura e gordura ja vieram pois fazem parte de form
    const paciente = { 
        nome: form.nome.value, 
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    //criando tr e td
    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    const nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = paciente.nome;
    // dá o mesmo que o debaixo que possui uma linha só
    const pesoTd = montaTd(paciente.peso, "info-peso");

    //adicionando paciente na tabela
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);//dá no mesmo que o debaixo sem precisar declarar a variavel antes;
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(dado,classe){
    const td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe); 

    return td;
}

function validaPaciente(paciente){
    var erros = [];
    
    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco!");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("O peso é inválido!");
    } 

    if(!validaAltura(paciente.altura)){
        erros.push("A altura é inválida!");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco!")
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco!")
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco!")
    }

    return erros;
}