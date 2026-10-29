<script lang="ts">
	import { CDN_BASE } from '#lib/config';
	import { CenteredImage } from 'hyperlib-but-svelte';
	import SEO from '#lib/components/SEO.svelte';
	import Borders from '#lib/components/Borders.svelte';
</script>

<SEO
	title="Commissions"
	description="Commission information for Arden's drinks."
	image="6f4fb403-c069-48df-5006-1eb88e651800"
/>

<Borders />

<h1>Commissions</h1>

<CenteredImage
	src="{CDN_BASE}ed935186-7bcc-45e0-053b-245c99016b00/public"
	alt="Arden with stars in his eyes and mouth open"
	width="20%"
/>

<p class="centered">Want Arden to make you a custom drink? Here is the menu below.</p>

<CenteredImage
	src="{CDN_BASE}6f4fb403-c069-48df-5006-1eb88e651800/public"
	alt="Arden Wolfsky's commission info image"
/>

<p class="centered">Commissions are currently <strong>closed</strong>.</p>

<style>
	h1 {
		margin-bottom: 15px;
	}
	p {
		padding-top: 15px;
		padding-bottom: 15px;
	}
</style>
