
<script>
    import '$styles/tailwind.css'
	import '$styles/app.css'
	import '$styles/sassapp.scss'
    import 'iconify-icon'
	import Appbar from '$components/app/Appbar.svelte'
	import Sidebar from '$components/app/sidebar/Sidebar.svelte';


</script>


<div class="w-screen h-screen relative flex flex-col bg-zinc-900 text-zinc-300 overflow-hidden">
	<Appbar />
	<div class="flex w-full h-full">
		<Sidebar />
		<slot />
	</div>
</div>

