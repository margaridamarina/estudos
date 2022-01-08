const Modal = {//montamos um objeto e colocamos duas funcionalidades
    open() {
        //Abrir modal
        //Adicionar classe active ao modal
        document
            .querySelector(".modal-overlay")
            .classList
            .add("active")
    },
    close() {
        //Fechar o modal
        //Remover classe active do modal
        document
            .querySelector(".modal-overlay")
            .classList
            .remove("active")
    }
}

const Storage = {
    get() {
        return JSON.parse(localStorage.getItem("dev.finances:transactions")) || []
    },
    set(transactions) { 
        localStorage.setItem("dev.finances:transactions", JSON.stringify(transactions))
    }
}

const Transaction = {
    all: Storage.get(),

    add(transaction) {
        Transaction.all.push(transaction)
        App.reload()
    },

    remove(index) {
        Transaction.all.splice(index, 1)
        App.reload()
    },

    incomes() {
        let expense = 0

        Transaction.all.forEach(transaction => {
            if (transaction.amount > 0) {
                expense += transaction.amount;
            }
        })
        return expense

        //pegar todas as transacoes
        //verificar se sao maior que 0 para cada transacao
        //se sim, somar a uma variavel e retornar a variavel
        //somar as entradas
    },

    expenses() {
        let expense = 0

        Transaction.all.forEach(transaction => {
            if (transaction.amount < 0) {
                expense += transaction.amount;
            }
        })
        return expense
    },
    total() {
        return Transaction.incomes() + Transaction.expenses();
    }
}

const DOM = {
    transactionsContainer: document.querySelector("#data-table tbody"),//transactionsContainer é um atributo desse objeto DOM que o valor é o elemento tbody de #data-table

    addTransaction(transaction, index) {
        const tr = document.createElement('tr') // o metodo addTransaction está criando o elemento tr 
        tr.innerHTML = DOM.innerHTMLTransaction(transaction, index) // adicionando um conteudo ao elemento tr
        tr.dataset.index = index //vai receber a posicao do array que vai ta guardado no nosso objeto
        DOM.transactionsContainer.appendChild(tr) //adiciona o elemento tr ao HTML
    },

    innerHTMLTransaction(transaction, index) { // o metodo innerHTMLTransaction recebe os parametros/argumentos transaction e index
        const CSSclass = transaction.amount > 0 ? "income" : "expense" // ?então :senão //se amount que é um método/atributo de transaction for maior do que 0
        // CSSclass tem o valor de income, senão tem o valor de expense //isso é um if ternário

        const amount = Utils.formatCurrency(transaction.amount)
        // Utils é um objeto, formatCurrency é um método que recebe um parametro transaction que tem um atributo amoun
        // todo método é uma função
        // método é um atributo que é uma função
        // uma função pode existir solta, se ela estiver dentro de um objeto é um método
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover transação">
            </td>
        `
        return html
    },

    updateBalance() {
        document
            .getElementById("incomeDisplay")
            .innerHTML = Utils.formatCurrency(Transaction.incomes())
        //pega no DOM o elemento com id incomeDisplay
        // o conteudo do elemento que tem o id incomeDisplay recebe o retorno da chamada da funcao formatCurrency de Utils, 
        // recebendo o retorno da chamada da funcao incomes de Transaction
        //"Soma das entradas"
        // mudando o conteudo do elemento com esse valor

        document
            .getElementById("expenseDisplay")
            .innerHTML = Utils.formatCurrency(Transaction.expenses()) //"Soma das saídas"
        document
            .getElementById("totalDisplay")
            .innerHTML = Utils.formatCurrency(Transaction.total()) //"Total"
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = ""
    }
}

const Utils = {
    formatAmount(value) {
        value = Number(value.replace(/\,\./g, "")) * 100 //nao precisava substituir ja q na conta o . e a , somem
        return value
    },

    formatDate(date) {
        const splittedDate = date.split("-")
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
    },

    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : "" // ?então :senão 
        // signal recebe o valor que Number converte do valor de value para numero e adiciona um - se for menor que 0 e nada se for maior que 0

        value = String(value).replace(/\D/g, "") //ache só número
        // value recebe o valor que String converte do valor de value para string 
        // replace é um método de String 
        // a expressao regular \D procura letras, g é uma flag global
        // substitui as letras por nada

        value = Number(value) / 100
        value = value.toLocaleString("pt-BR", { //toLocaleString é um método de value que é um Number que formata o valor seguindo os atributos 
            style: "currency",
            currency: "BRL"
        })
        return signal + value
    }
}

const Form = {
    //pegando inputs e deixando guardado no forms
    description: document.querySelector("input#description"),
    amount: document.querySelector("input#amount"),
    date: document.querySelector("input#date"),

    getValues() {
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value
        }
    },

    validateFields() { // verificar se todas as informacoes foram preechidas
        let { description, amount, date } = Form.getValues()
        if (description.trim() === "" || amount.trim() === "" || date.trim() === "") {
            // throw new Error ("Por favor, preencha todos os campos!")
        }
    },

    formatValues() { // formatar dados para salvar
        let { description, amount, date } = Form.getValues()

        amount = Utils.formatAmount(amount)

        date = Utils.formatDate(date)

        return {
            description: description,
            amount: amount,
            date: date
        }
    },

    saveTransaction(transaction) { // salvar
        Transaction.add(transaction)
    },

    clearFields() { // apagar os dados do formulario
        Form.description.value = ""
        Form.amount.value = ""
        Form.date.value = ""
    },

    submit(event) {
        event.preventDefault() //prevenit comportamento padrão

        try {
            Form.validateFields()
            const transaction = Form.formatValues()
            Form.saveTransaction(transaction)
            Form.clearFields()
            Modal.close() // modal feche
        } catch (error) {
            alert(error.message)
        }
    }
}

const App = {
    init() {
        Transaction.all.forEach((transaction, index) => { //forEach percorre todos os elementos de Transaction.all e executa a funcao anonima que recebe como argumentos transaction e index
            DOM.addTransaction(transaction, index) //chamando o metodo addTransaction de DOM passando um argumentos transaction e index
        })

        DOM.updateBalance() // chama o metodo updateBalance de DOM

        Storage.set(Transaction.all)

    },

    reload() {
        DOM.clearTransactions() // o metodo reload chama o metodo clearTransactions de DOM e o metodo init de App
        App.init()
    }
}

App.init() //chama o metodo init de App


