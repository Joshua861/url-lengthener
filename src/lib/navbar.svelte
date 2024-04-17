<script>
	import { SunMoon } from 'lucide-svelte';
	import Button from './components/ui/button/button.svelte';

	function toggleTheme() {
		let classList = document.body.classList;

		if (classList.contains('dark')) {
			classList.remove('dark');
		} else {
			classList.add('dark');
		}
	}
</script>

<div class="prose prose-2xl mx-auto mt-3 flex px-3 dark:prose-invert">
	<a href="/" class="flex-1 font-mono no-underline">url lengthener</a>
	<Button variant="outline" size="icon" on:click={toggleTheme}><SunMoon /></Button>
</div>
