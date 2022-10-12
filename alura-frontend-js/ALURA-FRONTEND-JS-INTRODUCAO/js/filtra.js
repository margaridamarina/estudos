var campoFiltro = document.querySelector("#filtrar-tabela");// pega o elemento filtrar-tabela

campoFiltro.addEventListener("input", function () {
    console.log(this.value); // mostra o valor do campo filtrar-tabela
    var pacientes = document.querySelectorAll(".paciente");// pega todos os pacientes da tabela
    // percorre todos os pacientes
    if (this.value.length > 0) {
        console.log("Tem algo digitado")
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            // if (nome != this.value){
            var expressao = new RegExp(this.value, "i");
            if (!expressao.test(nome)) {//testar se no meu nome vai ter pelo menos uma parte da minha expressão
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel"); // se o nome do paciente não contiver o valor do campo filtrar-tabela

            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
})
