import { tweened } from "svelte/motion";
import type { TweenedOptions } from "svelte/motion";
export interface Range {
	min: number
	max: number
}
type Config = TweenedOptions<number>

export function makeRangeStore(range: Range, config?: Config) {
	let isMin = true
	const { subscribe, set } = tweened<number>(range.min, config)

	return {
		subscribe,
		min: (config?: Config) => {
			isMin = true
			return set(range.min, config)
		},
		max: (config?: Config) => {
			isMin = false
			return set(range.max, config)
		},
		toggle: (config?: Config) => {
			if (isMin) {
				isMin = false
				return set(range.min, config)
			} else {
				isMin = true
				return set(range.max, config)
			}
		}
	}
}


