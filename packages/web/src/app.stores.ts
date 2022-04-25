import { browser } from '$app/env'
import { writable } from 'svelte/store'

// dark mode
export const darkMode = writable(false)
if (browser) {
  darkMode.set(localStorage.darkMode === "true")
  darkMode.subscribe((value) => (localStorage.darkMode = String(value)))
}
