import './styles.css'

const list = document.getElementById('messages')

window.addEventListener(
  'message',
  evt => {
    const li = document.createElement('li')
    li.innerText = JSON.stringify(evt.data)
    list.appendChild(li)
  },
  false
)

const shadingDiv = document.createElement('div')
shadingDiv.classList.add('shader')
document.body.appendChild(shadingDiv)

function addShader(selector) {
  const el = document.querySelector(selector)

  const { left, top, width, height } = el.getBoundingClientRect()

  const styleString = `left: ${left}px; top: ${top}px; width: ${width}px; height: ${height}px;`

  shadingDiv.style = styleString
}

function removeShader() {
  shadingDiv.style = ''
}

function setupEvent(selector) {
  // on mouse over
  document.querySelector(selector).addEventListener('mouseenter', evt => {
    evt.stopPropagation()
    addShader(selector)
  })
  // on mouse leave
  document.querySelector(selector).addEventListener('mouseleave', evt => {
    evt.stopPropagation()
    removeShader()
  })
}

;['.section-1 > h3', '.section-2 > h3', '.section-3 > h3', '.header'].forEach(
  selector => {
    setupEvent(selector)
  }
)
