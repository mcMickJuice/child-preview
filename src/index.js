import './styles.css'

const list = document.getElementById('messages')

document.addEventListener(
  'message',
  evt => {
    console.log(evt)
    const li = document.createElement('li')
    li.innerText = JSON.stringify(evt.data)
    list.appendChild(li)
  },
  false
)
