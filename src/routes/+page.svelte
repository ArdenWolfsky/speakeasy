<script lang="ts">
	import Homepage from '#lib/components/Homepage.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Homepage {...data} />
