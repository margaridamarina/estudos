console.clear()
const botao = document.querySelector(".data-button")
const fuiClicado = () => {
    const titulo = document.querySelector("h1")
    const vezes = document.querySelector(".texto")
    const clique = document.querySelector(".container")
    let clicado = 0 
    vezes.textContent = clicado
    clicado = clicado + 1  
    const h1 = document.createElement("h1") 
    h1.innerHTML = "Fui clicado"
    clique.appendChild(h1)
}
botao.addEventListener('click', fuiClicado)



const enter = document.querySelector("[data-form-button]")
const input = document.querySelector("[data-form-input]")
const tarefa = document.querySelector(".content")

const fuiDigitado = (evento) => {
    const valor = evento.target.value
    tarefa.innerHTML = valor
}

input.addEventListener('input', fuiDigitado)

