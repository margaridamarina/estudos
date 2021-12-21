//funções auxiliares do programa
export const removeDatasRepetidas = (datas) => {/*1  Vou passar para removeDatasRepetidas o meu localStorage. */
    const datasUnicas = []/*2  dentro do removeDatasRepetidas vou criar um array vazio chamado const dataUnicas*/
    datas.forEach((data=>{/*3 vamos fazer um loop*/
        if(datasUnicas.indexOf(data.dataFormatada) === -1){/*4 O método indexOf retorna o primeiro índice em que o elemento pode ser encontrado no array. Ele retorna -1 caso o mesmo não esteja presente.*/
            //Se a data não existe, então vamos colocar ela dentro desse array dataUnicas
            datasUnicas.push(data.dataFormatada)/*5*/
        }
    }))
    return datasUnicas/*6*/
}

export const ordenaDatas = (data) => {/*7*/
    data.sort((a,b)) => {/*8*/
        const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD')/*9*/
        const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')/*9*/
        return primeiraData - segundaData/*9*/
    })    
}