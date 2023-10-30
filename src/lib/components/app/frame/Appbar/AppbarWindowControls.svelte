<script lang='ts'>
	import { onDestroy, onMount } from 'svelte'
	import { appWindow } from '@tauri-apps/api/window'

	import { getWindowHandler } from '$scripts/app/window'
	import { appIsMaximizedStore } from './resize'
	
	const handler = getWindowHandler(appWindow) 

	$: buttonMap = {
		minimize: {
			action: handler.minimize,
			icon: 'material-symbols:minimize',
			active: true
		},
		maximize: {
			action: handler.maximize,
			icon: 'fluent:maximize-16-filled',
			active: true
		},
		toggle: {
			action: handler.toggle,
			icon: 'material-symbols:select-window',
			active: false
		},
		close: {
			action: handler.close,
			icon: 'material-symbols:close',
			active: true
		}
	}

	function onMaximized() {
		buttonMap.maximize.active = false
		buttonMap.toggle.active = true
		buttonMap = buttonMap
	}

	function onWindowed() {
		buttonMap.toggle.active = false
		buttonMap.maximize.active = true
		buttonMap = buttonMap
	}

	$: $appIsMaximizedStore
	? onMaximized()
	: onWindowed()

</script>


<!-- Window Controls -->
<div class="flex items-center text-md">
	{#each Object.values(buttonMap) as { action, icon, active }}
		{#if active}
			<button on:click={action} class="w-12 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-300 hover:bg-white/50" >
				<iconify-icon {icon} />
			</button>
		{/if}
	{/each}
</div>