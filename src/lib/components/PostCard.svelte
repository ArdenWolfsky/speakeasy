<script lang="ts">
	import { CDN_BASE } from '#lib/config';
	import { slugify } from '#lib/utils/posts';
	type Post = {
		title: string;
		url: string;
		image: string;
		tags: string[];
	};

	let { post }: { post: Post } = $props();

	const borderImage = `${CDN_BASE}e4b4a7cb-1328-40f5-15f4-cea1e5157c00/public`;
</script>

<div class="card">
	<a href={post.url} class="no-underline">
		<div class="card-image">
			<img src={borderImage} class="card-border right-top-border no-drag" alt="" />
			<img src={borderImage} class="card-border left-top-border no-drag" alt="" />
			<img src={borderImage} class="card-border right-bottom-border no-drag" alt="" />
			<img src={borderImage} class="card-border left-bottom-border no-drag" alt="" />
			<img
				src={`${CDN_BASE}${post.image}/public`}
				alt={post.title}
				width="100%"
				class="card-drink-image"
			/>
		</div>
	</a>

	<div class="card-content">
		<div class="has-text-centered">
			<p class="title is-4">{post.title}</p>

			<div class="tags">
				{#each post.tags as tag (tag)}
					<a href={`/tag/${encodeURIComponent(slugify(tag))}/`} class="tag tag-front no-underline">
						{tag.replaceAll('-', ' ')}
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		overflow: hidden;
		background-color: unset;
		position: relative;
		--bulma-card-radius: unset;
	}
	.card-image {
		background-color: var(--arden-cream);
		display: inline-block;
		transition: transform 0.3s ease-in-out;
		z-index: 1;
	}
	.card-image img {
		display: block;
		transition: 0.3s ease-in-out;
		overflow: hidden;
		margin-bottom: -10px;
	}
	.card-image:hover .card-drink-image {
		transform: scale(1.1);
	}
	.card-content {
		background-color: var(--arden-cream);
		padding-top: 5px;
		position: relative;
		z-index: 2;
	}
	.card-content .title {
		font-size: 2.7rem;
		font-family: GradoGradooNF;
		color: var(--arden-red);
		font-weight: bold;
		margin-bottom: 10px !important;
		margin-top: 10px !important;
	}
	.card .tags {
		margin-top: 20px;
	}
	@media screen and (max-width: 900px) {
		.card-content .title {
			font-size: 1.7rem;
		}
	}

	@media screen and (max-width: 768px) {
		.card-content .title {
			font-size: 2rem;
		}
		.card-image {
			width: 100%;
		}
	}
</style>
