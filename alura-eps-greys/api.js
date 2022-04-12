const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const epsFavoritos = []

app.post('/api/eps', (requisicao, resposta) => {
  try {
    if (!requisicao.body.nome || !requisicao.body.identificador) {
      throw new Error('Campos inválidos!')
    }

    epsFavoritos.push(requisicao.body)
    resposta.send(JSON.stringify(requisicao.body))
  } catch (erro) {
    resposta.send(JSON.stringify({ mensagem: erro.message }))
  }
})

app.get('/api/eps', (requisicao, resposta) => {
  resposta.send(JSON.stringify(epsFavoritos))
})

app.listen(3000, () => console.log('API está funcionando'))