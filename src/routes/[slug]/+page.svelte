<script lang="ts">
	import { page } from '$app/stores';
	import { db } from '$lib/firebase';
	import { doc, getDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';

	$: slug = $page.params.slug;

	onMount(async () => {
		const docSnap = await getDoc(doc(db, 'URLs', slug));
		const url = docSnap.data()!.url;

		window.location.href = `https://${url}`;
	});
</script>
