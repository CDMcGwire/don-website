<script>
	import YouTubeEmbed from "$lib/components/YouTubeEmbed.svelte";

	export let data;
</script>

<article>
	<div class="img-banner" id="documents-banner" />
	<h2>Quick Info</h2>
	<ul class="compact">
		<li>
			<strong>Game Name</strong>: Defense of Nations
		</li>
		<li>
			<strong>Developer</strong>: The Goodship Friendship
		</li>
		<li>
			<strong>Release Date</strong>: Targeting Early 2024
		</li>
		<li>
			<strong>Price</strong>: Targeting $5-10 USD on full release
		</li>
		<li>
			<strong>Platform</strong>: Windows, Linux/Steam Deck confirmed; Mac OS planned
		</li>
		<li>
			<strong>Contact</strong>: <a href="mailto:contact@goodshipfriendship.com">contact@goodshipfriendship.com</a>
		</li>
	</ul>
	<h1>Brief Concept</h1>
	<p>
		A base defense shooter in the vein of flash game classics like <em>Defend Your Castle</em> with satirical,
		choice-driven adventure and political sim elements woven into the loop.
	</p>
	<h1>The Setup</h1>
	<p>
		In a world that much resembles our own during the later years of the Cold War, the nations of the world find
		themselves forced into uneasy alliances as they're backed into a corner by an ever growing horde of mutant
		beasts and eldritch abominations.
	</p>
	<p>
		Things could be worse, though. After a few decades of constant pressure, humanity did what humanity does best
		in the post-industrial-revolution: <em>build a giant bureaucracy to beat the problem to death with scale</em>.
		The most prominent of these is the joint, international <strong>Defense of Nations Treaty (DONT)
		Organization</strong>.
	</p>
	<p>
		High on a sense of Duty, the player character has joined the Organization as a new combat officer.
		Unfortunately, the org has a LOT of desk work that needs to get done and a number of people seem to have lost
		the plot entirely. So, the front lines might be… <em>just a tad…</em> <strong>understaffed</strong>.
	</p>
	<p>Good luck out there!</p>
	<h1>Gameplay Features</h1>
	<ul>
		<li>
			<strong>Tactile Base Defense Action</strong>: The addictingly arcadey formula established in the flash era,
			now detailed and polished into the modern age. Smooth controls; responsive enemies; and the benefits of a
			full-fledged physics system.
		</li>
		<li>
			<strong>Performance Evaluation You Can Corrupt</strong>: Instead of receiving your letter ranking for a
			mission (and thus, your future budget) by an unquestionable game master, argue with the characters
			responsible directly.<br /><br />Just try not to make them grumpy in the process.
		</li>
		<li>
			<strong>Choice Driven Events and Surprises</strong>: A lot is going on in the DONT Organization, and the
			player can meddle between missions to gain bonuses, unlock secrets, enjoy short storylines… and maybe run
			into other kinds of trouble than just monsters.
		</li>
		<li>
			<strong>Leaderboards (for useless things)</strong>: Playing a game is more fun when you can compare yourself
			to your peers for bragging points. The DONT Organization will measure lots of things so you can find that
			one gameplay niche you absolutely own.
		</li>
	</ul>
	<h1>Trailer</h1>
	<div class="video-box">
		<YouTubeEmbed source="https://www.youtube.com/embed/EX5pqTMwhQQ?si=kcP5iW9Cup42zt-r" />
	</div>
	<h1>Screenshots</h1>
	<div class="scrn-grid">
		{#each data.screenshots as screenshot}
			<img src="{screenshot}" alt="Screenshot" />
		{/each}
	</div>
	<a class="cta-link" href="/defense-of-nations-screenshots.zip">
		Download Screenshots
	</a>
	<h1>Art and Logos</h1>
	<div class="img-flow">
		<div class="row keyart">
			<img alt="Primary Keyart" id="keyart-primary" src="/keyart/00-keyart-4x3.jpg" />
			<img alt="Alternate Keyart" id="keyart-secondary" src="/keyart/01-alternate-3x4.jpg" />
		</div>
		<img alt="Panorama Keyart" src="/keyart/02-panorama.png" />
		<img alt="Title Light on Dark" src="/keyart/03-title-light-on-dark.png" />
		<img alt="Title Dark on Light" src="/keyart/04-title-dark-on-light.png" />
		<div class="row logos">
			<img alt="Icon with Background" src="/keyart/05-icon-w-bg.png" />
			<img alt="Icon no Background" src="/keyart/06-icon-no-bg.png" />
		</div>
	</div>
	<a class="cta-link" href="/defense-of-nations-logos-and-keyart.zip">
		Download Art and Logos
	</a>
</article>

<style>
	#documents-banner {
		margin-top: 120px;
		height: 160px;
		background-image: url("/documents-banner.png");
	}

	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		font-size: 1.2rem;
	}

	article > *:first-child {
		margin-top: 60px;
	}

	h1, h2, h3 {
		align-self: flex-start;
		width: 100%;
		max-width: 700px;
		color: #2F333F;
	}

	h1 {
		margin: 40px 0 10px 0;
		padding: 0 12px;
		font-size: 3rem;
	}

	h2, h3 {
		margin-bottom: 10px;
	}

	p, ul, blockquote {
		align-self: flex-start;
		width: 100%;
		max-width: 700px;
		padding: 0 12px;
		font-size: 1.35rem;
		color: #2F333F;
	}

	h1 + p, h2 + p, h3 + p {
		margin-top: 0;
	}

	h1 + ul, h2 + ul, h3 + ul {
		margin-top: 0;
	}

	ul {
		list-style: circle;
	}

	li {
		margin: 0 0 3ex 2ch;
	}

	ul.compact > li {
		margin-bottom: 1ex;
		font-size: 0.9em;
	}

	strong {
		font-weight: bold;
		color: #5478a7;
	}

	.img-banner {
		width: 100%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		border-top: 4px solid #E1DBC4;
		border-bottom: 4px solid #E1DBC4;
		outline: 4px solid #1f2129;
		transition: height 0.4s;
	}

	.img-banner + h1 {
		margin-top: 20px;
	}

	.cta-link {
		display: flex;
		justify-content: center;
		align-content: center;
		margin: 4ex 12px 0 12px;
		padding: 4px;
		font-size: 1.5rem;
		color: #000;
		background-color: #74C5E2;
		border: 8px solid #E1DBC4;
		border-radius: 20px;
		outline: 4px solid #000;
		transition: background-color 0.2s, border-color 0.2s, font-size 0.4s, width 0.4s;
	}

	.cta-link:focus, .cta-link:hover {
		background-color: #F8C635;
		border-color: #000;
	}

	.video-box {
		width: 100%;
		max-width: 800px;
	}

	.scrn-grid {
		display: grid;
		grid: auto-flow dense / 1fr 1fr;
		grid-gap: 2px;
		width: 100%;
		max-width: 1400px;
	}

	.scrn-grid > img {
		width: 100%;
	}

	.img-flow {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		max-width: 1400px;
	}

	.row {
		display: flex;
		flex-direction: column;
	}

	.img-flow > .row {
		width: 100%;
	}
	
	.img-flow > img {
		max-width: 100%;
	}

	.keyart {
		width: 100%;
	}

	.logos {
		flex-direction: row;
		flex-wrap: wrap;
	}

	.logos img {
		flex: 0 1 auto;
		height: 160px;
	}

	@media screen and (min-width: 800px) {
		#documents-banner {
			height: 260px;
		}

		p, h1, h2, h3, ul, blockquote {
			align-self: center;
			margin-right: 100px;
			padding: 0;
		}

		.scrn-grid {
			grid: auto-flow dense / 1fr 1fr 1fr;
			grid-gap: 4px;
		}

		.row {
			flex-direction: row;
		}

		.keyart {
			align-items: flex-start;
			height: calc(100dvw * 300 / 625 - 8px);
		}

		.keyart img {
			height: 100%;
		}
	}

	@media screen and (min-width: 1400px) {
		#documents-banner {
			height: 320px;
		}

		.keyart {
			align-items: flex-start;
			height: calc(1400px * 300 / 625);
		}
	}
</style>