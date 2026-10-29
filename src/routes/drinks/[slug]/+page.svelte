<script lang="ts">
	import type { PageData } from './$types';
	import Borders from '#lib/components/Borders.svelte';
	import SEO from '#lib/components/SEO.svelte';
	import { slugify } from '#lib/utils/posts';

	let { data }: { data: PageData } = $props();

	const modules = import.meta.glob('../../../posts/*.md', {
		eager: true
	});

	const Content = $derived(
		(
			modules[data.post.path.replace('/src/posts/', '../../../posts/')] as {
				default: any;
			}
		)?.default
	);

	const formattedDate = $derived(
		data.post.date
			? new Date(`${data.post.date}T12:00:00`).toLocaleDateString('en-US', {
					month: 'long',
					day: 'numeric',
					year: 'numeric',
					timeZone: 'UTC'
				})
			: null
	);
</script>

<SEO
	title={data.post.title}
	description={data.post.description || "Arden Wolfsky's speakeasy."}
	image={data.post.image}
/>

<Borders />

<h1>{data.post.title}</h1>

{#if Content}
	<Content />
{:else}
	<p>Unable to load this drink.</p>
{/if}

<hr />

<!-- Tags -->
<div class="tags page-tags">
	{#each data.post.tags as tag (tag)}
		<span class="tag tag-front">
			<a href={`/tag/${encodeURIComponent(slugify(tag))}/`} class="no-underline">
				{tag.replaceAll('-', ' ')}
			</a>
		</span>
	{/each}
</div>

<!-- Categories -->
<div class="tags page-tags">
	{#each data.post.categories as category (category)}
		<span class="tag tag-front">
			<a href={`/category/${encodeURIComponent(slugify(category))}/`} class="no-underline">
				{category.replaceAll('-', ' ')}
			</a>
		</span>
	{/each}
</div>

<!-- Date -->
{#if formattedDate}
	<div class="post-date">
		<p>Posted on {formattedDate}</p>
	</div>
{/if}

<!-- Pagination -->
<nav class="pagination is-centered" aria-label="Drink navigation">
	{#if data.previous}
		<a
			href={data.previous.url}
			class="pagination-previous is-info"
			aria-label={`Previous drink: ${data.previous.title}`}
			title={data.previous.title}
		>
			<i class="fas fa-chevron-left" aria-hidden="true"></i>
		</a>
	{:else}
		<span class="pagination-previous" aria-disabled="true">
			<i class="fas fa-chevron-left" aria-hidden="true"></i>
		</span>
	{/if}

	{#if data.next}
		<a
			href={data.next.url}
			class="pagination-next is-info"
			aria-label={`Next drink: ${data.next.title}`}
			title={data.next.title}
		>
			<i class="fas fa-chevron-right" aria-hidden="true"></i>
		</a>
	{:else}
		<span class="pagination-next" aria-disabled="true">
			<i class="fas fa-chevron-right" aria-hidden="true"></i>
		</span>
	{/if}
</nav>

<style>
	.post-date {
		text-align: center;
	}
	.page-tags {
		margin-top: 30px;
	}
</style>
