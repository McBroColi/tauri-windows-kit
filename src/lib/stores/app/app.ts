import { writable } from "svelte/store"

export type WindowTitleObj = { title: string, icon?: string }

function makeWindowTitleStore() {
	const defaultTitle: WindowTitleObj = { title: "Dashboard", icon: "mdi:home" }
	const { subscribe, set, update } = writable<WindowTitleObj>(defaultTitle)

	return {
		subscribe,
		setTitle: (title: string, icon?: string) => set({ title, icon }),
		updateTitle: (title: string) => update((t) => ({ ...t, title })),
		updateIcon: (icon: string) => update((t) => ({ ...t, icon })),
		reset: () => set(defaultTitle),
	}
}

export const windowTitle = makeWindowTitleStore()