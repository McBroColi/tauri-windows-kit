

<script lang='ts'>
	import { createEventDispatcher } from "svelte"
	const dispatch = createEventDispatcher()

	export let icon: string
	export let btnTlwnd: string = ''
	export let iconTlwnd: string = ''

</script>


<button class="{btnTlwnd}" on:click={() => dispatch('click')}>
	<iconify-icon class="{iconTlwnd}" icon={icon} />
</button>