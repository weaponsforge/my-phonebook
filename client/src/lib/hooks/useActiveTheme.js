import { useSyncExternalStore } from 'react'

let subscribers = []

export function useActiveTheme() {
  const activeTheme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  return [activeTheme, setActiveTheme]
}

function setActiveTheme(arg) {
  localStorage.setItem('myPhonebookTheme', arg)
  emitChange()
}

function getSnapshot() {
  const activeTheme = localStorage.getItem('myPhonebookTheme') ?? 'light'
  return activeTheme
}

function getServerSnapshot() {
  return true
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
