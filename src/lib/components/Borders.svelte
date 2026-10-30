<script lang="ts">
	import { CDN_BASE } from '#lib/config';
</script>

<img
	src={`${CDN_BASE}e4b4a7cb-1328-40f5-15f4-cea1e5157c00/public`}
	class="no-drag right-top-border"
	alt=""
	aria-hidden="true"
/>

<img
	src={`${CDN_BASE}e4b4a7cb-1328-40f5-15f4-cea1e5157c00/public`}
	class="no-drag left-top-border"
	alt=""
	aria-hidden="true"
/>

<style>
	.left-top-border {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 3;
		transform: rotate(-180deg);
		width: 30%;
	}
	.right-top-border {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 3;
		transform: rotate(-90deg);
		width: 30%;
	}
</style>
