import { useCallback, useSyncExternalStore } from 'react'

const useSyncLocalStorageSubscribers = {}

export const useSyncLocalStorage = (saveDirectory = 'global') => {
  const subscribe = useCallback(
    (callback) => {
      if (!useSyncLocalStorageSubscribers[saveDirectory]) {
        useSyncLocalStorageSubscribers[saveDirectory] = []
      }
      useSyncLocalStorageSubscribers[saveDirectory] = [
        ...useSyncLocalStorageSubscribers[saveDirectory],
        callback,
      ]
      return () => {
        useSyncLocalStorageSubscribers[saveDirectory] =
          useSyncLocalStorageSubscribers[saveDirectory].filter(
            (el) => el !== callback
          )
      }
    },
    [saveDirectory]
  )

  const getSnapshot = () => {
    return localStorage[saveDirectory]
  }

  const getServerSnapshot = () => {
    return true
  }

  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  try {
    return JSON.parse(state)
  } catch (e) {
    return state
  }
}

export const setSyncLocalStorage = (saveDirectory = 'global', updatedValue) => {
  const emitChange = () => {
    for (let subscriber of useSyncLocalStorageSubscribers[saveDirectory]) {
      subscriber()
    }
  }
  try {
    const data = JSON.stringify(updatedValue)
    localStorage[saveDirectory] = data
  } catch(e) {
    localStorage[saveDirectory] = updatedValue
  }

  emitChange()
}