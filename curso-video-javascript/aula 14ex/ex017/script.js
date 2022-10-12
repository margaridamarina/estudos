function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        // while só parar testar, faria com o for
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option') //preferiu criar de forma dinamica que no html
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // cada parte da conta é um tab, para sabermos qual item foi selecionado, para javascript nao importa tanto
            tab.appendChild(item)
            c++
        }
    }

}