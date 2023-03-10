import { useSyncExternalStore } from 'react'

let subscribers = []

export function useGlobalState() {
  const globalState = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  return [JSON.parse(globalState), setGlobalState]
}

function setGlobalState(arg) {
  localStorage['myPhonebookState'] = JSON.stringify(arg ?? {})
  emitChange()
}

function getSnapshot() {
  const rawGlobalState = localStorage['myPhonebookState'] ?? JSON.stringify({})
  return rawGlobalState
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
