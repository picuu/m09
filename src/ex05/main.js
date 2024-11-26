function init () {
  const form = document.querySelector('form')

  const msgList = document.querySelector('#msg-list')
  
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const { msg } = Object.fromEntries(new FormData(form))
    if (!msg || msg.trim() === '') return
    
    const newMessage = document.createElement('div')
    newMessage.textContent = msg
    newMessage.classList.add('msg')

    msgList.appendChild(newMessage)

    form.reset()

    scrollToBottom()
  })
}

function scrollToBottom () {
  const msgList = document.querySelector('#msg-list')
  msgList.scrollTop = msgList.scrollHeight
}

init()
