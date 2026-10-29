<script lang="ts">
    import '../app.css';
	import Hero from '#lib/components/Hero.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import Navbar from '#lib/components/Navbar.svelte';

	import { page } from '$app/state';

	let { children }: { children: Snippet } = $props();
	const isHomepage = $derived(page.url.pathname === '/');
</script>

<Navbar />
{#if isHomepage}
	<Hero />
{/if}
<section class="section page-background">
	<div class="container container-page fade-in">
		<div class="content">
			{@render children()}
		</div>
	</div>
</section>

<Footer />
