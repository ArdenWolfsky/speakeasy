<script lang="ts">
	import { onMount } from 'svelte';

	let {
		uri,
		cid
	}: {
		uri: string;
		cid: string;
	} = $props();

	onMount(() => {
		const script = document.createElement('script');

		script.src = 'https://embed.bsky.app/static/embed.js';
		script.async = true;

		document.body.appendChild(script);

		return () => {
			script.remove();
		};
	});
</script>

<div class="bluesky-iframe">
	<blockquote class="bluesky-embed" data-bluesky-uri={uri} data-bluesky-cid={cid}></blockquote>
</div>

<style>
	.bluesky-iframe {
		display: flex;
		justify-content: center;
	}
</style>
