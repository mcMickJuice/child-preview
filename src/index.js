import './styles.css'

const list = document.getElementById('messages')

window.addEventListener(
  'message',
  evt => {
    //TODO: CHECK URLLLLLLL
    const data = JSON.parse(evt.data)

    const { selector, type } = data

    if (type === 'focus') {
      addShader(selector)
    } else if (type === 'blur') {
      removeShader()
    }

    addMessage(`Message received ${evt.data}`)
  },
  false
)

function addMessage(message) {
  const li = document.createElement('li')
  li.innerText = message
  list.appendChild(li)
}

const shadingDiv = document.createElement('div')
shadingDiv.classList.add('shader')
document.body.appendChild(shadingDiv)

function addShader(selector) {
  addMessage(`add shader to ${selector}`)
  const el = document.querySelector(selector)

  if (el == null) {
    addMessage(`element not found for selector ${selector}`)
  }

  const { left, top, width, height } = el.getBoundingClientRect()

  const styleString = `left: ${left}px; top: ${top}px; width: ${width}px; height: ${height}px;`

  shadingDiv.style = styleString
}

function removeShader() {
  addMessage('remove shader')
  shadingDiv.style = ''
}

// function setupEvent(selector) {
//   // on mouse over
//   document.querySelector(selector).addEventListener('mouseenter', evt => {
//     evt.stopPropagation()
//     addShader(selector)
//   })
//   // on mouse leave
//   document.querySelector(selector).addEventListener('mouseleave', evt => {
//     evt.stopPropagation()
//     removeShader()
//   })
// }

// ;['.section-1 > h3', '.section-2 > h3', '.section-3 > h3', '.header'].forEach(
//   selector => {
//     setupEvent(selector)
//   }
// )
