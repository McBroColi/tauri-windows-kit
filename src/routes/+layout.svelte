
<script>
    import '$styles/tailwind.css'
	import '$styles/app.css'
	import '$styles/sassapp.scss'
    import 'iconify-icon'

	import AppFrame from '$components/app/frame/AppFrame/AppFrame.svelte';


</script>


<div class="w-screen h-screen relative flex bg-base-100 text-base-content overflow-hidden">
	<AppFrame>
		<slot />
	</AppFrame>
</div>

