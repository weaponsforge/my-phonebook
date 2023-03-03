import { useSyncExternalStore } from 'react'

let subscribers = []
let bgColor = Math.floor(Math.random()*255)
let interval

export function useBgColor() {
  const bgColor = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  return [bgColor, animateBgColor]
}

function animateBgColor() {
  if (interval) clearInterval(interval)
  interval = setInterval(()=>{
    bgColor = (bgColor + 1)% 255
    emitChange()
    console.log(bgColor)
  },1000)
}

function getSnapshot() {
  return bgColor
}

function getServerSnapshot() {
  return bgColor
}

function emitChange() {
  for (let subscriber of subscribers) {
    subscriber()
  }
}

function subscribe(callback) {
  subscribers = [...subscribers, callback]
  return () => {
    subscribers = subscribers.filter(el=> el!== callback)
  }
}