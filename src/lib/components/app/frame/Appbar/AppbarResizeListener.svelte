<script lang='ts'>
	import { onDestroy, onMount } from "svelte";
	import { createWindowEventListener } from "./resize";

	let destroy: undefined | (() => void) = undefined

	onMount(() => {
		destroy = createWindowEventListener()
	})

	onDestroy(() => {
		if (destroy) {
			destroy()
		}
	})
</script>