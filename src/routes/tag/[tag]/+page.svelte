<script lang="ts">
	import type { PageData } from './$types';
	import PostCard from '#lib/components/PostCard.svelte';
	import SEO from '#lib/components/SEO.svelte';

	let { data }: { data: PageData } = $props();

	const displayTag = $derived(data.tag.replaceAll('-', ' '));
</script>

<SEO title={displayTag} noindex />

<h1>{displayTag}</h1>
<p class="centered">Showing all drinks that contain {displayTag}</p>

<div class="columns is-multiline">
	{#each data.posts as post (post.slug)}
		<div class="column is-4">
			<PostCard {post} />
		</div>
	{/each}
</div>
