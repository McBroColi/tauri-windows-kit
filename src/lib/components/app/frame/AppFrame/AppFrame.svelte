<script lang='ts'>
	import Appbar from "../Appbar/Appbar.svelte";
	import AppSidebar from "../Sidebar/AppSidebar.svelte";

</script>




<AppSidebar />
<div class="flex flex-col w-full">
	<Appbar />
	<slot />
</div>





