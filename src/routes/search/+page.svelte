<script lang="ts">
	import type { PageData } from './$types';
	import SEO from '#lib/components/SEO.svelte';
	import Borders from '#lib/components/Borders.svelte';
	import { slugify } from '#lib/utils/posts';
	import { CenteredImage } from 'hyperlib-but-svelte';
	import { CDN_BASE } from '#lib/config';

	let { data }: { data: PageData } = $props();

	let query = $state('');

	const results = $derived.by(() => {
		const search = query.trim().toLowerCase();

		if (search.length < 2) return [];

		const titleMatches = data.posts.filter((post) => post.title.toLowerCase().includes(search));

		const ingredientMatches = data.posts.filter(
			(post) =>
				!post.title.toLowerCase().includes(search) &&
				post.ingredients.join(' ').toLowerCase().includes(search)
		);

		return [...titleMatches, ...ingredientMatches];
	});
</script>

<Borders />

<SEO title="Search" description="Looking for something specific? Start here." />

<h1>Search</h1>

<CenteredImage
	src="{CDN_BASE}15d5aee1-43b8-4460-a0b9-3e9e316f4600/public"
	alt="Arden looking confused"
	width="20%"
/>

<p class="centered">
	Looking for something specific? Search here! <br />You can search by title or drink ingredients.
</p>

<div class="search-container">
	<input
		type="search"
		class="search-input"
		placeholder="Search for a drink..."
		aria-label="Search drinks"
		bind:value={query}
	/>

	<div class="results-container" aria-live="polite">
		{#if query.trim().length >= 2}
			{#if results.length > 0}
				{#each results as post (post.url)}
					<div class="search-result">
						<a href={post.url}>
							<p>{post.title}</p>
						</a>
					</div>
				{/each}
			{:else}
				<p>No drinks were found.</p>
			{/if}
		{/if}
	</div>
</div>

<h2>Categories</h2>
<div class="tag-list-wrapper">
	{#each data.categories as category (category)}
		<a
			href={`/category/${encodeURIComponent(slugify(category))}/`}
			class="tag-list-item no-underline"
		>
			{category.replaceAll('-', ' ')}
		</a>
	{/each}
</div>

<h2>Type</h2>

<div class="tag-list-wrapper">
	{#each data.tags as tag (tag)}
		<a href={`/tag/${encodeURIComponent(slugify(tag))}/`} class="tag-list-item no-underline">
			{tag.replaceAll('-', ' ')}
		</a>
	{/each}
</div>

<style>
	.search-input {
		border-color: var(--arden-cream);
		background-color: var(--arden-red-darker);
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		box-sizing: border-box;
		color: var(--arden-cream);
		font-size: 1em;
	}

	.search-input::placeholder {
		color: var(--arden-cream);
		opacity: 1;
	}

	.results-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.search-result {
		font-family: GradoGradooNF;
	}

	.search-result a {
		text-decoration: none;
		font-size: 1.5em;
	}

	.tag-list-wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 1ch;
		margin-top: 20px;
	}

	.tag-list-item {
		border: 1px solid;
		padding: 1ch 2ch;
		color: var(--arden-cream);
	}

	.tag-list-item:hover {
		color: var(--arden-tan);
	}

	h1 {
		margin-bottom: 15px;
	}
	p {
		padding-top: 15px;
		padding-bottom: 15px;
	}
</style>
