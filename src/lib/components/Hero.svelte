<div class="overlay">
	<section class="hero is-medium">
		<div class="hero-body"></div>
	</section>
</div>

<style>
	.overlay {
		background-color: rgba(0, 0, 0, 0.5);
	}
	.hero {
		background-color: var(--arden-red-darker);
		background-image: url('https://imagedelivery.net/WG0vvpzHMcKj08eFQPOnJg/65c4765c-0239-4712-de83-f8dee0626c00/public');
		background-repeat: no-repeat;
		background-size: 100%;
		background-position: top;
		position: relative;
		z-index: -1;
	}

	@media screen and (min-width: 1400px) {
		.hero {
			background-position-y: -50px;
			padding-top: 9.5rem;
			padding-bottom: 9.5rem;
		}
	}

	@media screen and (max-width: 1200px) {
		.hero {
			background-position-y: -20px;
		}
	}

	@media screen and (min-width: 1200px) {
		.hero {
			background-position-y: -50px;
		}
	}

	@media screen and (max-width: 768px) {
		.hero {
			background-position-y: -20px;
			padding-top: 3.5rem;
			padding-bottom: 3.5rem;
		}
	}

	@media screen and (max-width: 600px) {
		.hero {
			background-position-y: -20px;
			padding-top: 3.5rem;
			padding-bottom: 3.5rem;
		}
	}
</style>
