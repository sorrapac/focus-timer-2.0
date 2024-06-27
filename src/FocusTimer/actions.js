import state from './state.js'
import * as sounds from './sounds.js'
import * as timer from './timer.js'
import * as el from  './elements.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  sounds.buttonPress.play()
  timer.countDown()

}

export function stop() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.buttonPress.play()
  
}
  
export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  sounds.buttonPress.play()

}

export function setTimer() {
  state.isRunning = false
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
  sounds.buttonPress.play()
}

export function setUp() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  if (minutes + 5 > 60) {
    timer.updateDisplay(60, 0)
    return
  }
  minutes = minutes + 5
  timer.updateDisplay(minutes, seconds)
  sounds.buttonPress.play()
}

export function setDown() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  if (minutes - 5 < 0) {
    return
  }
  minutes = minutes - 5
  timer.updateDisplay(minutes, seconds)
  sounds.buttonPress.play()
}

export function forestOn() {
  state.forestOn = document.documentElement.classList.toggle('forestOn')
  if(state.forestOn) {
    sounds.forestAudio.play()
    return
  }

  sounds.forestAudio.pause()
}

export function rainOn() {
  state.rainOn = document.documentElement.classList.toggle('rainOn')
  if(state.rainOn) {
    sounds.rainAudio.play()
    return
  }

  sounds.rainAudio.pause()
}

export function cafeteriaOn() {
  state.cafeteriaOn = document.documentElement.classList.toggle('cafeteriaOn')
  if(state.cafeteriaOn) {
    sounds.cafeteriaAudio.play()
    return
  }

  sounds.cafeteriaAudio.pause()
}

export function fireOn() {
  state.fireOn = document.documentElement.classList.toggle('fireOn')
  if(state.fireOn) {
    sounds.fireAudio.play()
    return
  }

  sounds.fireAudio.pause()
}