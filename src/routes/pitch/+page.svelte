<script>
	import YouTubeEmbed from "$lib/components/YouTubeEmbed.svelte";
	export let data;
</script>

<article>
	<div class="img-banner" id="keyart-wide" />
	<div class="elevator-pitch">
		<p>
			A base defense shooter in the vein of flash game classics like <em>Defend Your Castle</em> but with a
			satirical, political-sim twist.
		</p>
		<p>
			<strong>Shoot hordes of monsters</strong>, <strong>negotiate your operating budget</strong>, and <strong>navigate
			international rivalries</strong>. All for The Good of Humanity™️!
		</p>
	</div>
	<h1>TRAILER</h1>
	<div class="video-box">
		<YouTubeEmbed source="https://www.youtube.com/embed/EX5pqTMwhQQ?si=kcP5iW9Cup42zt-r" />
	</div>
	<a class="cta-link" href="https://store.steampowered.com/app/2571840/Defense_of_Nations/">
		Steam Page with Playable Demo
	</a>

	<h1>VIDEO DEMO</h1>
	<div class="video-box">
		<YouTubeEmbed source="" />
	</div>

	<h1>The HOOKS</h1>
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
	</ul>

	<div class="img-banner" id="action-banner" />
	<h1>The GAME LOOP</h1>
	<p>
		The game progresses in a 3-phase loop for a set number of days (or until the player discovers an alternate
		ending):
	</p>
	<ul>
		<li>
			<strong>Missions</strong> — The main action. Stand on one side of the screen and shoot everything crawling
			in from the other until the end condition for the month is complete.
		</li>
		<li>
			<strong>Negotiation</strong> — A quick paced diplomacy game where your combat, economic, and political
			performance for the last month is evaluated and your budget allocation determined.
		</li>
		<li>
			<strong>Preparation</strong> — Repair defenses, manage equipment, explore the organization in what free time
			you have, then choose what mission to tackle next.
		</li>
	</ul>

	<div class="img-banner" id="lineup-banner" />
	<h1>The SET DRESSING</h1>
	<p>
		The game is set in a fictional world that resembles our own during the later years of the Cold War. However, the
		nations of the world find themselves forced into uneasy alliances as they're backed into a corner by an ever
		growing horde of mutant beasts and eldritch abominations.
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

	<h1>The PLAN</h1>
	<h1>SCREENSHOTS</h1>
	<div class="scrn-grid">
		{#each data.screenshots as screenshot}
			<img src="{screenshot}" alt="Screenshot" />
		{/each}
	</div>
</article>

<style>
	#keyart-wide {
		height: 300px;
		background-image: url("/keyart-wide.png");
	}

	#action-banner {
		margin-top: 120px;
		height: 160px;
		background-image: url("/action-banner.png");
	}

	#lineup-banner {
		margin-top: 120px;
		height: 160px;
		background-image: url("/lineup-banner.png");
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

	h1 {
		align-self: flex-start;
		width: 100%;
		max-width: 600px;
		margin: 120px 0 10px 0;
		padding: 0 12px;
		font-size: 3rem;
		color: #2F333F;
	}

	p, ul, blockquote {
		align-self: flex-start;
		width: 100%;
		max-width: 600px;
		padding: 0 12px;
		font-size: 1.35rem;
		color: #2F333F;
	}

	h1 + p {
		margin-top: 0;
	}

	ul {
		list-style: circle;
	}

	li {
		margin: 0 0 3ex 2ch;
	}

	strong {
		font-weight: bold;
		color: #495581;
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
		font-size: 2.5rem;
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
		max-width: 1280px;
	}

	.scrn-grid {
		display: grid;
		grid: auto-flow dense / 1fr;
		grid-gap: 6px;
		width: 100%;
		max-width: 1400px;
	}

	.scrn-grid > img {
		width: 100%;
	}

	@media screen and (min-width: 700px) {
		.elevator-pitch {
			display: flex;
			flex-direction: column;
			width: 480px;
			margin-top: -30px;
			margin-right: 120px;
			background-color: #E1DBC4;
			border: 4px solid #1f2129;
			outline: 3px solid #E1DBC4;
		}

		.elevator-pitch > p {
			width: 100%;
			max-width: unset;
			margin: 0;
			padding: 12px;
			font-size: 1.2em;
		}
	}

	@media screen and (min-width: 800px) {
		#keyart-wide {
			height: 360px;
		}

		#lineup-banner {
			height: 260px;
		}

		p, h1, h2, h3, ul, blockquote {
			align-self: center;
			margin-right: 200px;
			padding: 0px;
		}

		.scrn-grid {
			grid: auto-flow dense / 1fr 1fr;
		}
	}

	@media screen and (min-width: 1400px) {
		#keyart-wide {
			height: 420px;
		}

		#action-banner {
			height: 320px;
		}

		#lineup-banner {
			height: 320px;
		}

		.scrn-grid {
			grid: auto-flow dense / 1fr 1fr 1fr;
		}
	}

	@media screen and (min-width: 2000px) {
		#keyart-wide {
			height: 480px;
		}
	}
</style>