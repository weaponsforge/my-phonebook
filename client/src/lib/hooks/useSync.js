import { useSyncExternalStore } from 'react'

const useSyncLocalStorageSubscribers = {}
const useSyncSessionStorageSubscribers = {}
const useSyncGlobalVariableSubscribers = {}

const globalVariable = {}

export const useSyncLocalStorage = (saveDirectory = 'global') => {
  if (!useSyncLocalStorageSubscribers[saveDirectory]) {
    useSyncLocalStorageSubscribers[saveDirectory] = []
  }

  const subscribe = (callback) => {
    useSyncLocalStorageSubscribers[saveDirectory] = [...useSyncLocalStorageSubscribers[saveDirectory], callback]
    return () => {
      useSyncLocalStorageSubscribers[saveDirectory] = useSyncLocalStorageSubscribers[saveDirectory].filter(
        (el) => el !== callback
      )
    }
  }

  const getSnapshot = () => {
    return localStorage[saveDirectory]
  }

  const getServerSnapshot = () => {
    return true
  }

  const emitChange = () => {
    for (let subscriber of useSyncLocalStorageSubscribers[saveDirectory]) {
      subscriber()
    }
  }

  const setState = (newState) => {
    localStorage[saveDirectory] = JSON.stringify(newState)
    emitChange()
  }

  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return [state ? JSON.parse(state) : undefined, setState]
}

export const useSyncSessionStorage = (saveDirectory = 'global') => {
  if (!useSyncSessionStorageSubscribers[saveDirectory]) {
    useSyncSessionStorageSubscribers[saveDirectory] = []
  }

  const subscribe = (callback) => {
    useSyncSessionStorageSubscribers[saveDirectory] = [...useSyncSessionStorageSubscribers[saveDirectory], callback]
    return () => {
      useSyncSessionStorageSubscribers[saveDirectory] = useSyncSessionStorageSubscribers[saveDirectory].filter(
        (el) => el !== callback
      )
    }
  }

  const getSnapshot = () => {
    return sessionStorage[saveDirectory]
  }

  const getServerSnapshot = () => {
    return true
  }

  const emitChange = () => {
    for (let subscriber of useSyncSessionStorageSubscribers[saveDirectory]) {
      subscriber()
    }
  }

  const setState = (newState) => {
    sessionStorage[saveDirectory] = JSON.stringify(newState)
    emitChange()
  }

  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return [state ? JSON.parse(state) : undefined, setState]
}

export const useSyncGlobalVariable = (saveDirectory = 'global') => {
  if (!useSyncGlobalVariableSubscribers[saveDirectory]) {
    useSyncGlobalVariableSubscribers[saveDirectory] = []
  }

  const subscribe = (callback) => {
    useSyncGlobalVariableSubscribers[saveDirectory] = [...useSyncGlobalVariableSubscribers[saveDirectory], callback]
    return () => {
      useSyncGlobalVariableSubscribers[saveDirectory] = useSyncGlobalVariableSubscribers[saveDirectory].filter(
        (el) => el !== callback
      )
    }
  }

  const getSnapshot = () => {
    return JSON.stringify(globalVariable[saveDirectory])
  }

  const getServerSnapshot = () => {
    return true
  }

  const emitChange = () => {
    for (let subscriber of useSyncGlobalVariableSubscribers[saveDirectory]) {
      subscriber()
    }
  }

  const setState = (newState) => {
    globalVariable[saveDirectory] = newState
    emitChange()
  }

  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return [state ? JSON.parse(state) : undefined, setState]
}