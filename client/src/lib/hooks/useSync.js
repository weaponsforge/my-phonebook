import { useCallback, useSyncExternalStore } from 'react'

const useSyncLocalStorageSubscribers = {}
const useSyncStoreSubscribers = {}
const store = {}

export const useSyncLocalStorage = (saveDirectory = 'global') => {
  
  const subscribe = useCallback((callback) => {
    if (!useSyncLocalStorageSubscribers[saveDirectory]) {
      useSyncLocalStorageSubscribers[saveDirectory] = []
    }
    useSyncLocalStorageSubscribers[saveDirectory] = [...useSyncLocalStorageSubscribers[saveDirectory], callback]
    return () => {
      useSyncLocalStorageSubscribers[saveDirectory] = useSyncLocalStorageSubscribers[saveDirectory].filter(
        (el) => el !== callback
      )
    }
  }, [saveDirectory])

  const getSnapshot = () => {
    return localStorage[saveDirectory]
  }

  const getServerSnapshot = () => {
    return undefined
  }

  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return (state ? JSON.parse(state) : undefined)
}

export const setSyncLocalStorage = (saveDirectory='global', updatedValue) => {
  const emitChange = () => {
    for (let subscriber of useSyncLocalStorageSubscribers[saveDirectory]) {
      subscriber()
    }
  }
  localStorage[saveDirectory] = JSON.stringify(updatedValue)
  emitChange()
}

// this is an attempt to solve the bug, and detach getter from setter, so calling setter won't neccesarily subscribe the component to the store
export const useSyncStore = (saveDirectory = 'global') => {

  const subscribe = useCallback((callback) => {
    if (!useSyncStoreSubscribers[saveDirectory]) {
      useSyncStoreSubscribers[saveDirectory] = []
    }
    useSyncStoreSubscribers[saveDirectory] = [...useSyncStoreSubscribers[saveDirectory], callback]
    return () => {
      useSyncStoreSubscribers[saveDirectory] = useSyncStoreSubscribers[saveDirectory].filter(
        (el) => el !== callback
      )
    }
  },[saveDirectory])

  const getSnapshot = () => {
    return store[saveDirectory]
  }

  const getServerSnapshot = () => {
    return store[saveDirectory]
  }

  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return (state ? JSON.parse(state) : undefined)
}

export const setSyncStore = (saveDirectory = 'global', updatedValue) => {
  const emitChange = () => {
    for (let subscriber of useSyncStoreSubscribers[saveDirectory]) {
      subscriber()
    }
  }
  store[saveDirectory] = JSON.stringify(updatedValue)
  emitChange()
}

