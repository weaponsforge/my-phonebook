import { useCallback, useSyncExternalStore } from 'react'

const useSyncLocalStorageSubscribers = {}
const useSyncSessionStorageSubscribers = {}
const useSyncGlobalVariableSubscribers = {}
const useSyncStoreSubscribers = {}

const globalVariable = {}
const store = {}

export const useSyncLocalStorage = (saveDirectory = 'global') => {
  if (!useSyncLocalStorageSubscribers[saveDirectory]) {
    useSyncLocalStorageSubscribers[saveDirectory] = []
  }

  const subscribe = useCallback((callback) => {
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
    return 
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

  const subscribe = useCallback((callback) => {
    useSyncSessionStorageSubscribers[saveDirectory] = [...useSyncSessionStorageSubscribers[saveDirectory], callback]
    return () => {
      useSyncSessionStorageSubscribers[saveDirectory] = useSyncSessionStorageSubscribers[saveDirectory].filter(
        (el) => el !== callback
      )
    }
  },[saveDirectory])

  const getSnapshot = () => {
    return sessionStorage[saveDirectory]
  }

  const getServerSnapshot = () => {
    return
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
  const subscribe = useCallback((callback) => {
    if (!useSyncGlobalVariableSubscribers[saveDirectory]) {
      useSyncGlobalVariableSubscribers[saveDirectory] = []
    }
    useSyncGlobalVariableSubscribers[saveDirectory] = [...useSyncGlobalVariableSubscribers[saveDirectory], callback]
    return () => {
      useSyncGlobalVariableSubscribers[saveDirectory] = useSyncGlobalVariableSubscribers[saveDirectory].filter(
        (el) => el !== callback
      )
    }
  },[saveDirectory])

  const getSnapshot = () => {
    return globalVariable[saveDirectory]
  }

  const getServerSnapshot = () => {
    return globalVariable[saveDirectory]
  }

  const emitChange = () => {
    for (let subscriber of useSyncGlobalVariableSubscribers[saveDirectory]) {
      subscriber()
    }
  }

  const setState = (newState) => {
    globalVariable[saveDirectory] = JSON.stringify(newState)
    emitChange()
  }

  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return [state ? JSON.parse(state) : undefined, setState, globalVariable]
}

// this is an attempt to solve the bug, and detach getter from setter, so calling setter won't neccesarily subscribe the component to the store
export const useSyncStore = (saveDirectory = 'global') => {

  const subscribe = (callback) => {
    if (!useSyncStoreSubscribers[saveDirectory]) {
      useSyncStoreSubscribers[saveDirectory] = []
    }
    useSyncStoreSubscribers[saveDirectory] = [...useSyncStoreSubscribers[saveDirectory], callback]
    return () => {
      useSyncStoreSubscribers[saveDirectory] = useSyncStoreSubscribers[saveDirectory].filter(
        (el) => el !== callback
      )
    }
  }

  const getSnapshot = () => {
    return store[saveDirectory]
  }

  const getServerSnapshot = () => {
    return store[saveDirectory]
  }

  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return (state ? JSON.parse(state) : undefined)
}

export const setSyncStore = (saveDirectory, updatedValue) => {
  store[saveDirectory] = JSON.stringify(updatedValue)
  for (let subscriber of useSyncStoreSubscribers[saveDirectory]) {
    subscriber()
  }
}