import * as el from "./elements.js";
import * as actions from "./actions.js"
import state from "./state.js";
import { updateDisplay } from "./timer.js";

function eventos () {
  const action = event.target.dataset.action
  if(typeof actions[action] != 'function') {
    return
  }

  actions[action]()
}

export function registerControls () {
  controls.addEventListener('click', (event) => {
  
    eventos()
  
  })
}

export function stopControl () {
  stop.addEventListener('click', (event) => {
    eventos()
 })
}

export function soundControls () {
  sounds.addEventListener('click', (event) => {
    eventos()
  })
}

export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ""
  })

  el.minutes.onkeypress = (event) => /\d/.test(event.key)

  el.minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

   state.minutes = time
   state.seconds = 0
    
   updateDisplay()
   el.minutes.removeAttribute('contenteditable')
  })
}