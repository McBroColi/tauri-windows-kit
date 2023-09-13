
<script lang='ts'>
	import { tweened } from "svelte/motion";
	import { appSidebarToggleStore } from "$stores/sidebar";

	$: isOpen = $appSidebarToggleStore


	const store = tweened<number>(0)
	
	let isHovered: boolean = false

	const onClick = () => {
		appSidebarToggleStore.toggle()
	}


	$: { store.set(isHovered ? isOpen ? 10 : 2 : isOpen ? 12 : 0, { duration: 200 })}


</script>



<button
on:mouseenter={(() => isHovered = true)}
on:mouseleave={() => isHovered = false}
on:focus={() => isHovered = true}
on:blur={() => isHovered = false}
on:click={onClick}
class="w-12 h-8 flex items-center justify-center">
	
	<div class="w-4 h-4 border rounded-sm box-content">
		<div
		style="transform: translateX({$store}px);"
		class="w-1 h-4 bg-white absolute"
		
		></div>
	</div>
</button>