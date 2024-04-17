<script>
	import '../app.pcss';
	import Navbar from '$lib/navbar.svelte';
	import { Toaster } from 'svelte-sonner';
</script>

<Navbar />
<Toaster />
<slot></slot>
