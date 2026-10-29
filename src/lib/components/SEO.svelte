<script lang="ts">
	import { page } from '$app/state';
	import { CDN_BASE, SITE_URL } from '#lib/config';

	let {
		title,
		description = "Arden Wolfsky's speakeasy.",
		image,
		noindex = false
	}: {
		title: string;
		description?: string;
		image?: string;
		noindex?: boolean;
	} = $props();

	const siteTitle = "Arden Wolfsky's Speakeasy";

	const fullTitle = $derived(`${title} - ${siteTitle}`);

	const currentUrl = $derived(new URL(page.url.pathname, SITE_URL).href);

	const defaultImage = '65c4765c-0239-4712-de83-f8dee0626c00';

	const imageUrl = $derived(`${CDN_BASE}${image || defaultImage}/public`);
</script>

<svelte:head>
	<title>{fullTitle}</title>

	<meta name="description" content={description} />
	<link rel="canonical" href={currentUrl} />

	<!-- Open Graph -->
	<meta property="og:url" content={currentUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={currentUrl} />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />

	{#if noindex}
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>
