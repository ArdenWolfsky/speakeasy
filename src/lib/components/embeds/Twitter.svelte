<script lang="ts">
	import { onMount } from 'svelte';
	import { loadEmbedScript } from './embedScripts';

	let {
		tweetId,
		username
	}: {
		tweetId: string;
		username: string;
	} = $props();

	let container: HTMLDivElement;

	onMount(() => {
		let active = true;

		const renderTweet = async () => {
			try {
				await loadEmbedScript('https://platform.twitter.com/widgets.js');

				if (!active || !container) return;

				const twttr = (window as any).twttr;

				if (twttr?.widgets) {
					await twttr.widgets.createTweet(tweetId, container, {
						align: 'center'
					});
				}
			} catch (error) {
				console.error('Failed to load Twitter embed:', error);
			}
		};

		void renderTweet();

		return () => {
			active = false;
		};
	});
</script>

<div bind:this={container}></div>
