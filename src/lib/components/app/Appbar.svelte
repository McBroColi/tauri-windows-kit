
<script lang='ts'>
	import { appWindow } from '@tauri-apps/api/window'
	import { getWindowHandler } from '$scripts/app/window'
	import { onDestroy, onMount } from 'svelte'
	import IconButton from './generic/buttons/IconButton.svelte'
	import { windowTitle } from '$stores/app'
	import AppIcon from './AppIcon.svelte';

	const handler = getWindowHandler(appWindow)
	let isMaximized = false
	let resizeListener: any

	$: appIcon = $windowTitle.icon
	$: appTitle = $windowTitle.title

	
	onMount(() => {
		resizeListener = window.addEventListener('resize', async () => {
			isMaximized = await appWindow.isMaximized();
		})
	})

	onDestroy(() => {
		window.removeEventListener('resize', resizeListener);
	})

	const btnTlwnd = "w-12 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-300 bg-zinc-950 hover:bg-zinc-800"

</script>






<div class="titlebar flex h-8 bg-zinc-950">

	<!-- App Icon -->
	<AppIcon />




	<!-- Drag Region -->
	<div data-tauri-drag-region class="flex flex-grow mt-1"></div>


	<!-- Window Controls -->
	<div class="flex items-center text-md">
		<!-- Minimize -->
		<IconButton {btnTlwnd} icon="material-symbols:minimize" on:click={ handler.minimize } />

		{#if !isMaximized}
			<!-- Maximize -->
			<IconButton {btnTlwnd} icon="fluent:maximize-16-filled" on:click={() => { handler.maximize(); isMaximized = true }} />
		{:else}
			<!-- Windowed -->
			<IconButton {btnTlwnd} icon="material-symbols:select-window" on:click={() => { handler.toggle(); isMaximized = false }} />
		{/if}
		<!-- Exit -->
		<IconButton {btnTlwnd} icon="material-symbols:close" on:click={ handler.close } />
	</div>


</div>