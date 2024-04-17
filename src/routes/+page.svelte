<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { db } from '$lib/firebase';
	import { doc, setDoc } from 'firebase/firestore';
	import { toast } from 'svelte-sonner';
	import { v4 } from 'uuid';

	let linkOpen = false;
	let link: string, urlInput: string;
	const urlRe =
		/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
	let root = $page.url.href;
	console.log(root);

	function lengthenLink() {
		if (!urlRe.test(urlInput)) {
			console.error('Invalid URL');
			toast.error('Invalid URL');
			return;
		}

		const url = urlInput.match(urlRe)![0];
		const id = `${v4()}${v4()}${v4()}${v4()}${v4()}${v4()}${v4()}${v4()}${v4()}`;
		toast(`Lengthening ${url}...`);

		setDoc(doc(db, 'URLs', id), {
			url
		});

		linkOpen = true;
		link = `${root}${id}`;
	}
</script>

<div class="prose mx-auto px-3 dark:prose-invert">
	<br />
	<div class="flex">
		<Input bind:value={urlInput} class="flex-1" type="text" placeholder="Enter link here" />
		<Button on:click={lengthenLink}>Lengthen URL</Button>
	</div>
	{#if linkOpen}
		<br />
		<a href={link}>{link}</a>
	{/if}
</div>
