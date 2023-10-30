<script lang='ts'>
	import { appSidebarToggleStore } from "$components/app/frame/shared/sidebarState"
	import { makeBiColorStore } from "$stores/generic/tweened/colorstops";
	import { expoOut } from "svelte/easing";
	import { tweened } from "svelte/motion";
	import colors from 'tailwindcss/colors';
	import { interpolateHsl } from 'd3-interpolate';
	import { frameConfig } from "../shared/frameConfig";
	import ToggleSidebar from "../shared/ToggleSidebar.svelte";

	const sidebarWidth = tweened(0, { duration: 400, easing: expoOut })
	
	
	let sidebarMax = 500

	const toggleOn = () => {
		sidebarWidth.set(sidebarMax)
	}
	const toggleOff = () => {
		sidebarWidth.set(0)
	}
	
	$: { $appSidebarToggleStore === true ? toggleOn() : toggleOff() }


</script>




<!-- slim w/ icons -->
<div class="bg-base-200/50 w-10 flex flex-col border-r-2 border-neutral">

	<div class="w-10 bg-base-300 flex items-center justify-center" style="height: {frameConfig.appbar.height}px;">
		<ToggleSidebar />
	</div>
	
</div>

<!-- full menu -->
<div style="width: {$sidebarWidth}px;" class="bg-base-200/50 h-full overflow-hidden">
	<div style="width: {sidebarMax}px;" class="h-full flex flex-col flex-none">
		
		<div style="height: {frameConfig.appbar.height}px;" class="bg-base-300">
			
		</div>

	</div>
</div>
