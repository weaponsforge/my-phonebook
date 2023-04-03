import { useCallback, useSyncExternalStore } from 'react'

const useSyncLocalStorageSubscribers = {}
const useSyncStoreSubscribers = {}
const store = {}

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

  return state ? JSON.parse(state) : undefined
}

export const setSyncLocalStorage = (saveDirectory = 'global', updatedValue) => {
  const emitChange = () => {
    for (let subscriber of useSyncLocalStorageSubscribers[saveDirectory]) {
      subscriber()
    }
  }
  localStorage[saveDirectory] = JSON.stringify(updatedValue)
  emitChange()
}

// this is an attempt to solve the bug, and detach getter from setter, so calling setter won't neccesarily subscribe the component to the store
/**
 * Returns the state of the given save directory in the store, by subscribing to the save directory
 * and using an external state manager to manage state updates.
 *
 * @param {string} saveDirectory - The save directory to be subscribed to.
 * @returns {*} The state of the given save directory in the store.
 */
export const useSyncStore = (saveDirectory = 'global') => {
  /**
   * Subscribes to the given save directory and returns a function to unsubscribe from the
   * save directory.
   *
   * @param {Function} callback - The callback function to be called when the save directory changes.
   * @returns {Function} A function to unsubscribe from the save directory.
   */
  const subscribe = useCallback(
    (callback) => {
      if (!useSyncStoreSubscribers[saveDirectory]) {
        useSyncStoreSubscribers[saveDirectory] = []
      }

      // Adds the callback function to the list of subscribers for the save directory
      useSyncStoreSubscribers[saveDirectory] = [
        ...useSyncStoreSubscribers[saveDirectory],
        callback,
      ]

      // Returns a function to remove the callback function from the list of subscribers
      return () => {
        useSyncStoreSubscribers[saveDirectory] = useSyncStoreSubscribers[
          saveDirectory
        ].filter((el) => el !== callback)
      }
    },
    [saveDirectory]
  )

  /**
   * Returns a snapshot of the state of the given save directory in the store.
   *
   * @returns {*} A snapshot of the state of the given save directory in the store.
   */
  const getSnapshot = () => {
    return JSON.stringify(store[saveDirectory])
  }

  /**
   * Returns a snapshot of the state of the given save directory in the server.
   *
   * @returns {*} A snapshot of the state of the given save directory in the server.
   */
  const getServerSnapshot = () => {
    return JSON.stringify(store[saveDirectory])
  }


  // Uses an external state manager to manage state updates and returns the state of the given save directory
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  // Returns the parsed state of the given save directory
  return state ? JSON.parse(state) : undefined
}

/**
 * Sets the updated value to the given save directory in the store, and notifies all subscribers
 * subscribed to the save directory.
 *
 * @param {string} saveDirectory - The save directory in which to set the updated value.
 * @param {*} updatedValue - The updated value to be set in the save directory.
 */
export const setSyncStore = (saveDirectory = 'global', updatedValue) => {
  /**
   * Emits change event to all subscribers subscribed to the save directory.
   */
  const emitChange = () => {
    for (let subscriber of useSyncStoreSubscribers[saveDirectory]) {
      subscriber()
    }
  }

  // Sets the updated value to the given save directory in the store
  store[saveDirectory] = updatedValue

  // Notifies all subscribers subscribed to the save directory
  emitChange()
}