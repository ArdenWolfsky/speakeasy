<script lang="ts">
	import type { PageData } from './$types';
	import PostCard from '#lib/components/PostCard.svelte';
	import SEO from '#lib/components/SEO.svelte';
	import Borders from '#lib/components/Borders.svelte';

	let { data }: { data: PageData } = $props();

	const displayCategory = $derived(data.category.replaceAll('-', ' '));
</script>

<SEO
	title={displayCategory}
	description={`Browse ${displayCategory} drinks from Arden Wolfsky's Speakeasy.`}
	noindex
/>

<h1>{displayCategory}</h1>
<p class="centered">Showing all drinks from the {displayCategory} category.</p>

<div class="columns is-multiline">
	{#each data.posts as post (post.slug)}
		<div class="column is-4">
			<PostCard {post} />
		</div>
	{/each}
</div>
