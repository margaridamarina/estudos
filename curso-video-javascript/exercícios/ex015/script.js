function verificar() {
    const data = new Date()
    const ano = data.getFullYear() // ano com 4 digitos
    const fano = document.getElementById('txtano') // ano que veio do formualario
    const res = document.querySelector('div#res') //outra forma de fazer o de cima
    res.innerHTML = null // nao deixa ficar uma lista, vai apagando se quiser outra resposta
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        const fsex = document.getElementsByName('radsex')
        const idade = ano - Number(fano.value)
        let gênero = ''
        const img = document.createElement('img')
        img.setAttribute('id', 'foto') // mesma coisa que ir la no html e colocar <img id='foto'>
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'bebe-menino.png')
            }
            else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-homem.png')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-homem.png')
            }
            else {
                //Idoso
                img.setAttribute('src', 'idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'bebe-menina.png')

            }
            else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-mulher.png')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulta-mulher.png')
            }
            else {
                //Idoso
                img.setAttribute('src', 'idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        const p = document.createElement('p')
        p.innerHTML = `Detectamos ${gênero} com ${idade} anos.` 
        res.appendChild(p)
        res.appendChild(img)
    }
}