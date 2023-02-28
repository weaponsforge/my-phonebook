import { useSyncExternalStore } from 'react';

let subscribers = []

export function useActiveTheme() {
  const activeTheme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return [activeTheme, setActiveTheme]
}

export function setActiveTheme(arg) {
    localStorage.setItem('myPhonebookTheme', arg)
    emitChange()
}

function getSnapshot() {
    const activeTheme = localStorage.getItem('myPhonebookTheme') ?? 'light'
    // console.log(activeTheme)
  return activeTheme
}

function getServerSnapshot() {
  return true; // Always show "Online" for server-generated HTML
}

function emitChange() {
    for (let subscriber of subscribers) {
      subscriber();
    }
}

function subscribe(callback) {
    subscribers = [...subscribers, callback]
  return () => {
    subscribers = subscribers.filter(el=> el!== callback)
  };
}
