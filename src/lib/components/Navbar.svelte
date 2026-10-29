<script lang="ts">
	let isActive = $state(false);
</script>

<div class="navbar">
	<div class="container header-container">
		<div class="navbar-brand">
			<p>Arden Wolfsky's Speakeasy</p>
			<button
				type="button"
				class="navbar-burger burger"
				class:is-active={isActive}
				aria-label="Toggle navigation"
				aria-controls="navMenu"
				aria-expanded={isActive}
				onclick={() => (isActive = !isActive)}
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</button>
		</div>
		<div class="navbar-menu" class:is-active={isActive} id="navMenu">
			<div class="navbar-end">
				<a class="navbar-item" href="/">Drink Menu</a>
				<a class="navbar-item" href="https://ardenwolfsky.com">Home</a>
				<a class="navbar-item" href="/commissions">Commissions</a>
				<a class="navbar-item" href="/search">Search</a>
			</div>
		</div>
	</div>
</div>

<style>
	.navbar {
		background-color: var(--arden-red);
	}
	.navbar p,
	.navbar a {
		font-family: RitzyRemix;
	}
	.navbar-item {
		text-transform: uppercase;
		color: var(--arden-tan);
		font-weight: bold;
	}
	.navbar-item:hover {
		background-color: unset !important;
		color: var(--arden-cream);
	}
	.navbar-brand {
		justify-content: center;
		align-items: center;
	}
	.navbar-brand p {
		color: var(--arden-tan);
		font-weight: 700;
		text-transform: uppercase;
		font-size: 2.3rem;
	}
	.navbar-burger span {
		background-color: var(--arden-tan);
	}

	@media screen and (max-width: 1400px) {
		.navbar-item {
			font-size: 0.8em;
		}
	}

	@media screen and (max-width: 1215px) {
		.navbar-item {
			font-size: 0.7em;
			padding: 0.5rem 0.6rem;
		}
		.navbar-brand p {
			font-size: 2.3rem;
		}
	}
	@media screen and (max-width: 1200px) {
		.navbar-brand p {
			font-size: 1.6rem;
		}
		.navbar-item {
			font-size: 1em;
			padding: 0.5rem 0.5rem;
		}
	}
	@media screen and (max-width: 1023px) {
		.navbar-menu {
			background-color: var(--arden-red);
			display: none;
		}

		.navbar-menu.is-active {
			display: block;
		}

		.navbar-brand p {
			padding-left: 10px;
		}
	}
	@media screen and (max-width: 426px) {
		.navbar-brand p {
			font-size: 1.5rem;
			padding-left: 0px;
		}
	}
	@media screen and (max-width: 372px) {
		.navbar-brand p {
			font-size: 1.2rem;
		}
	}
	.header-container {
		background-color: var(--arden-red);
	}
</style>
