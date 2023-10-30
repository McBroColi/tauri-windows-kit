
<script lang='ts'>
	import AppbarResizeListener from './AppbarResizeListener.svelte'
	import AppbarWindowControls from './AppbarWindowControls.svelte'

	import { windowTitle } from '$stores/app/app'
	import { frameConfig } from '../shared/frameConfig'

	$: pageIcon = $windowTitle.icon
	$: pageTitle = $windowTitle.title
	
</script>




<!-- Listen for window resizing -->
<AppbarResizeListener />


<!-- Appbar -->
<div style="height: {frameConfig.appbar.height}px;" class="titlebar flex bg-base-300">

	<!-- Drag Region (place between elements if you want draggable space) -->
	<div data-tauri-drag-region class="flex flex-grow mt-1"></div>



	<!-- Window Controls -->
	<AppbarWindowControls />

</div>