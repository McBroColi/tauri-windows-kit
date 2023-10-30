import { writable } from "svelte/store"


export function makeBoolStore(initValue?: boolean) {
	const { subscribe, set, update } = writable<boolean>(initValue ? initValue : false)

	return {
		subscribe, set, update,
		on: () => set(true),
		off: () => set(false),

		true: () => set(true),
		false: () => set(false),

		toggle: () => update(val => val = !val)
	}
}