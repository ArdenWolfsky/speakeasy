<script lang="ts">
	import type { Post } from '#lib/utils/posts';
	import PostCard from '#lib/components/PostCard.svelte';
	import SEO from '#lib/components/SEO.svelte';
	import { CenteredImage } from 'hyperlib-but-svelte';
	import { CDN_BASE } from '#lib/config';

	let {
		posts,
		page,
		totalPages
	}: {
		posts: Post[];
		page: number;
		totalPages: number;
	} = $props();
</script>

<SEO
	title="Drink Menu"
	description="Welcome to Arden Wolfsky's speakeasy. Take a seat and pick a drink!"
/>

<div class="front-intro">
	<h1>Drink Menu</h1>
	<CenteredImage
		src="{CDN_BASE}d500c126-db8a-4c03-b62c-5c48c9d81f00/public"
		alt="Arden with his arms crossed looking smug"
		width="clamp(200px, 20%, 400px)"
	/>
	<p>
		Welcome to Arden Wolfsky's speakeasy. Take a seat and pick a drink!<br />

		Not sure where to start? Looking for something specific? Take a look at the
		<a href="/search">search</a> page.
	</p>
	<hr />
</div>
<div class="columns is-multiline is-mobile">
	{#each posts as post (post.slug)}
		<div class="column is-6-mobile is-6-tablet is-4-desktop">
			<PostCard {post} />
		</div>
	{/each}
</div>
<nav class="pagination is-centered" aria-label="Page navigation">
	<ul class="pagination-list">
		{#each Array.from({ length: totalPages }, (_, i) => i + 1) as pageNumber}
			<li>
				<a
					href={pageNumber === 1 ? '/' : `/page${pageNumber}`}
					class:is-current={pageNumber === page}
					class="pagination-link no-underline"
					aria-current={pageNumber === page ? 'page' : undefined}
				>
					{pageNumber}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.front-intro {
		text-align: center;
		font-size: 1.5rem;
	}
	.front-intro p {
		padding-top: 15px;
		padding-bottom: 15px;
	}
	.front-intro h1 {
		font-size: 3em;
		color: var(--arden-tan);
		font-family: RitzyRemix;
		margin-bottom: 15px;
	}
	@media screen and (max-width: 1215px) {
		.front-intro h1 {
			font-size: 2.5em;
		}
	}
	@media screen and (max-width: 760px) {
		.front-intro h1 {
			font-size: 2em;
		}
	}

	@media screen and (max-width: 600px) {
		.front-intro h1 {
			font-size: 1.7em;
		}
	}
</style>
