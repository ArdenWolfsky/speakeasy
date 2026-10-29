<script lang="ts">
	let {
		videoId,
		username
	}: {
		videoId: string;
		username: string;
	} = $props();
</script>

<div class="tiktok-container">
	<iframe
		src={`https://www.tiktok.com/embed/v2/${videoId}`}
		title={`TikTok video by @${username}`}
		allow="fullscreen"
		allowfullscreen
		loading="eager"
	></iframe>
</div>

<style>
	.tiktok-container {
		display: flex;
		justify-content: center;
		width: 100%;
		margin: 1rem 0;
	}

	iframe {
		width: 325px;
		max-width: 100%;
		height: 740px;
		border: none;
	}
</style>
