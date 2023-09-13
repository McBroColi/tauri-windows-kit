import { tweened } from "svelte/motion";
import type { TweenedOptions } from "svelte/motion";
export interface Range {
	min: number
	max: number
}
type Config = TweenedOptions<number>

export function makeRangeStore(range: Range, config?: Config) {
	let isMin = true
	const { subscribe, set, update } = tweened<number>(range.min)

	return {
		subscribe,
		min: (config?: Config) => {
			isMin = true
			return set(range.min)
		},
		max: (config?: Config) => {
			isMin = false
			return set(range.max)
		},
		toggle: (config?: Config) => {
			if (isMin) {
				isMin = false
				return set(range.min)
			} else {
				isMin = true
				return set(range.max)
			}
		}
	}
}


