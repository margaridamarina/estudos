import fetch from 'node-fetch' //importou a funcao do pacote
import { parse } from 'node-html-parser'

console.clear()

// const response = fetch('https://www.archdaily.com.br/br/noticias-de-arquitetura?ad_source=jv-header&ad_name=main-menu');//o fetch retorna uma promise

// response.then((resposta)=>{
//   let promessa = resposta.text()

//   promessa.then((outraResposta)=>{
//     console.log('then', outraResposta)
//   }).catch((outraRespostaErro)=>{
//     console.log('catch', outraRespostaErro)
//   })
// }).catch((respostaErro)=>{
//   console.log('catch', respostaErro)
// })

import { writeFile } from 'fs/promises'

try {
  const response = await fetch(
    'https://www.archdaily.com.br/br/noticias-de-arquitetura?ad_source=jv-header&ad_name=main-menu'
  ) //o fetch retorna uma promise //await bloqueia o fluxo e ja retorna a promessa resolvida e se cair no catch lança uma excecao
  const body = await response.text()
  const root = parse(body)

  const links = root.querySelectorAll('a')
  links.forEach(element => {
    const href = element.attrs.href
    if (!href) return

    const isRelative = href.startsWith('/')
    if (isRelative) {
      element.setAttribute('href', `https://www.archdaily.com.br${href}`)
    }
  })

  writeFile('./arquivoLocal.html', root.toString())
} catch (error) {
  console.error('erro', error)
}
