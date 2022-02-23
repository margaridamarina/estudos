//[Dados]
const channels = [
  {
    name: 'Margô',
    likes: 0
  },
  {
    name: 'Ramon',
    likes: 0
  },
]

//============================

function handleLike(channelName) {
  channels.forEach(currentChannel => {
    if (channelName === currentChannel.name) {
      console.log('Atualiza os likes do: ', channelName)
      currentChannel.likes = currentChannel.likes + 1
    }
  })

  render()
}

//=============================
// [Lógica de renderização]

const buttonTemplate = function (channel) {
  return `
<button class="botaoDeLike" onclick="handleLike('${channel.name}')">
  <span class="owner">${channel.name}</span>
  <img src="heart.png" alt="">
  <span class="contador">${channel.likes} likes</span>
</button>
`
}

function render() {
  console.log('[render]')

  const $tela = document.querySelector('.tela')
  $tela.innerHTML = channels
    .map((channel => {
      return buttonTemplate(channel)
      // return `<button>${channel}</button>`;
    })).join('')
}
render();