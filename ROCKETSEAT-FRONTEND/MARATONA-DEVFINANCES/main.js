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

const transactions = [{
    id: 1,
    description: 'Luz',
    amount: -50000, //depois formataremos legal
    date: '23/01/2021',
},
{
    id: 2,
    description: 'Website',
    amount: 500000, //depois formataremos legal
    date: '24/01/2021',
},
{
    id: 3,
    description: 'Internet',
    amount: -20013, //depois formataremos legal
    date: '27/01/2021',
},
{
    id: 4,
    description: 'App',
    amount: 200000, //depois formataremos legal
    date: '26/01/2021',
}]

const Transaction = {
    all: transactions,

    add(transaction){
        Transaction.all.push(transaction)
        App.reload()
    }, 

    incomes() {
        let expense = 0
        
        Transaction.all.forEach(transaction=>{ 
            if(transaction.amount > 0){
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
        
        Transaction.all.forEach(transaction=>{ 
            if(transaction.amount < 0){
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
    transactionsContainer: document.querySelector("#data-table tbody"),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense" // ?então :senão

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `
        return html
    },

    updateBalance() {
        document
            .getElementById("incomeDisplay")
            .innerHTML = Utils.formatCurrency(Transaction.incomes()) //"Soma das entradas"
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
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : "" // ?então :senão
        value = String(value).replace(/\D/g, "") //ache só números
        value = Number(value) / 100
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
        return signal + value
    }
}

const App = {
    init(){
        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction)
        })
        
        DOM.updateBalance()
        
    },

    reload() {
        DOM.clearTransactions()
        App.init()
    }
}

App.init()

Transaction.add({
    id: 39,
    description:'Alo',
    amount:200,
    date:'27/01/2021'
})