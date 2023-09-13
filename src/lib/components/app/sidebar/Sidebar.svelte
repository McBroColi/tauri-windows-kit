<script lang='ts'>
	import { appSidebarToggleStore } from "$stores/sidebar"
	import { makeBiColorStore } from "$stores/motion/colorstops";
	import { expoOut } from "svelte/easing";
	import { tweened } from "svelte/motion";
	import colors from 'tailwindcss/colors';
	import { interpolateHsl } from 'd3-interpolate';

	const sidebarWidth = tweened(0, { duration: 400, easing: expoOut })
	
	
	let colorOff = colors.zinc[900]
	let colorOn = "#111113"
	const slimColor = tweened(colorOff, { duration: 200, interpolate: interpolateHsl })
	
	const toggleOn = () => {
		slimColor.set(colorOn)
		sidebarWidth.set(300)
	}
	const toggleOff = () => {
		sidebarWidth.set(0).then(_ => slimColor.set(colorOff))
	}
	
	$: { $appSidebarToggleStore === true ? toggleOn() : toggleOff() }


</script>


<div class="flex flex-none h-full">
	<div style="background-color: {$slimColor};" class="w-10 flex flex-col border-r-2 border-zinc-800">
	</div>
	<div style="background-color: {$slimColor}; width: {$sidebarWidth}px;" class="h-full">
	</div>
</div>