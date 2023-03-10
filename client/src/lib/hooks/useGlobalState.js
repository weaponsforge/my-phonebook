/**
 * A module for managing global state using localStorage and server snapshot.
 * @module globalState
 */

import { useSyncExternalStore } from 'react'

/**
 * Configuration object for global state.
 * @typedef {Object} Config
 * @property {string} localStorageRootAddress - The root address for storing data in localStorage.
 */

/**
 * Configuration object for global state.
 * @type {Config}
 */
export let config = {
  localStorageRootAddress:'myPhonebookState'
}

/**
 * An array of callbacks to be called when the global state changes.
 * @type {Array.<function>}
 */
let subscribers = []

/**
 * A hook for accessing the global state.
 * @returns {Array.<*>} An array with two elements: the current global state and a function to update it.
 */
export function useGlobalState() {
  const globalState = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  return [JSON.parse(globalState), setGlobalState]
}

/**
 * A function for updating the global state.
 * @param {*} arg - The new value of the global state.
 */
function setGlobalState(arg) {
  localStorage[config.localStorageRootAddress] = JSON.stringify(arg ?? {})
  emitChange()
}

/**
 * A function for getting a snapshot of the current global state.
 * @returns {string} A stringified representation of the global state.
 */
function getSnapshot() {
  const rawGlobalState = localStorage[config.localStorageRootAddress] ?? JSON.stringify({})
  return rawGlobalState
}

/**
 * A function for getting a server snapshot of the global state.
 * @returns {boolean} Always returns true.
 */
function getServerSnapshot() {
  return true
}

/**
 * A function for calling all subscribers when the global state changes.
 */
function emitChange() {
  for (let subscriber of subscribers) {
    subscriber()
  }
}

/**
 * A function for subscribing to global state changes.
 * @param {function} callback - The callback to be called when the global state changes.
 * @returns {function} A function to unsubscribe from global state changes.
 */
function subscribe(callback) {
  subscribers = [...subscribers, callback]
  return () => {
    subscribers = subscribers.filter(el=> el!== callback)
  }
}
