<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { loadEmbedScript } from './embedScripts';

	let {
		postId,
		type = 'p'
	}: {
		postId: string;
		type?: 'p' | 'reel';
	} = $props();

	onMount(() => {
		let active = true;

		const renderEmbed = async () => {
			await tick();

			try {
				await loadEmbedScript('https://www.instagram.com/embed.js');

				if (active) {
					(window as any).instgrm?.Embeds?.process();
				}
			} catch (error) {
				console.error('Failed to load Instagram embed:', error);
			}
		};

		void renderEmbed();

		return () => {
			active = false;
		};
	});
</script>

<blockquote
	class="instagram-media"
	data-instgrm-permalink={`https://www.instagram.com/${type}/${postId}/`}
	data-instgrm-version="14"
></blockquote>
