import './styles.css'

const list = document.getElementById('messages')

document.addEventListener('message', evt => {
  console.log(evt)
  const li = document.createElement('li')
  li.innerText = evt.data.toString()
  list.appendChild(li)
})
