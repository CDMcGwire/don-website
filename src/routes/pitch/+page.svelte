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
		<YouTubeEmbed source="https://www.youtube.com/embed/gvIYsyKl5q8?si=itRkb3YWtlDuNE60" />
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

	<h1>The DEVELOPMENT PLAN</h1>
	<p>
		We have the core game already, now we want to make the <em>full</em> game and we want it
		<em><strong>excellent</strong></em>: finish the narrative content; more weapon, enemy, and locale variety; more
		visual polish and flair; and further refinement of the gameplay.
	</p>
	<p>
		The scale of the game is expected to stay very "indie" and very within the realm of what a solo developer and
		one or two contract artists can accomplish in a years time from where we are now. <strong>For a 1.0 release, we
		expect
		to deliver</strong>:
	</p>
	<ul>
		<li>
			A core, 21 in-game month "Campaign" lasting about 1-2 hours per playthrough.
		</li>
		<li>
			5-6 possible primary endings with cutscenes (and a few bad endings as comes up naturally in the writing).
		</li>
		<li>
			5-6 basic enemy archetypes with 2-3 parameter tweaked variants per, as well as 3-4 unique Bosses.
		</li>
		<li>
			6-7 weapons for the player with 3-5 upgrade options for each.
		</li>
		<li>
			50-60 combat missions, ~100 exploration events, 30-40 budgeting events.
		</li>
		<li>
			5-6 "MilSpAM" characters with about 15-20 expressions each.
		</li>
		<li>
			6-7 unique combat arenas.
		</li>
		<li>
			Friend leaderboards for total score and a few "fun" metrics.
		</li>
	</ul>
	<p>
		<strong>Target sale price:</strong> We're aiming for the $5-10 market with the 1.0 release.
	</p>
	<p>
		<strong>Planned platform support:</strong> Windows/Linux/Mac via Steam primarily with other PC storefronts
		included as leaderboard functionality is determined for each.
	</p>
	<p>
		Console ports will be considered post 1.0, though we don't suspect those will be large technical undertakings as
		we're using the Unity Engine and already designing for a console-like experience on the <strong>Steam
		Deck</strong>.
	</p>
	<p>
		<strong>Early Access considerations?:</strong> From a development standpoint, the game is quite agreeable to
		iterative updates on Early Access. The content pipeline is already quite modular and from work experience in
		other areas of the software industry we're used to incremental development, so doing Early Access or not would
		change little on the production side and is more of a question of marketing, sales, and funding.
	</p>
	<p>
		Basically, we like the Early Access model, but we're not putting anything on it until we can tell our players,
		"You will have the 1.0 version within the year."
	</p>
	<h2>What we're looking for in a publisher</h2>
	<p>
		<strong>Time and a platform.</strong> Funding is currently the biggest question on whether this project gets our
		full-time effort and is out <em>soon</em>, or stays a side-hustle and comes out <em>eventually</em>.
		Unsurprisingly we'd prefer the former. Second to that—but no less important if we want the venture to make a
		profit in a decent amount of time—is marketing. We <em>are</em> a new studio and, admittedly, effective
		advertisement is not top on the list of our skills as of yet.
	</p>
	<p>
		If this sounds like a good fit for your portfolio, we look forward to talking more. If not, we still thank you
		for checking us out.
	</p>
	<p>Happy sailing,</p>
	<p>
		<img alt="The Goodship Friendship Logo" id="tgsfs-logo" src="/tgsfriendship-logo-transparent.png" />
	</p>
	<p>
		<a href="mailto:contact@goodshipfriendship.com">contact@goodshipfriendship.com</a>
	</p>

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
		height: 130px;
		background-image: url("/action-banner.png");
	}

	#lineup-banner {
		margin-top: 120px;
		height: 130px;
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

	h1, h2, h3 {
		align-self: flex-start;
		width: 100%;
		max-width: 700px;
		color: #2F333F;
	}

	h1 {
		margin: 80px 0 10px 0;
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

	p + ul {
		margin-top: 0;
	}

	p {
		line-height: 1.25;
	}

	ul {
		list-style: circle;
		margin: 0;
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
		margin: 4ex 12px 5ex 12px;
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
		grid: auto-flow dense / 1fr 1fr;
		grid-gap: 2px;
		width: 100%;
		max-width: 1400px;
	}

	.scrn-grid > img {
		width: 100%;
	}

	#tgsfs-logo {
		width: 300px;
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

		#lineup-banner, #action-banner {
			height: 260px;
		}

		p, h1, h2, h3, ul, blockquote {
			align-self: center;
			margin-right: 200px;
			padding: 0;
		}

		.scrn-grid {
			grid: auto-flow dense / 1fr 1fr 1fr;
			grid-gap: 4px;
		}
	}

	@media screen and (min-width: 1400px) {
		#keyart-wide {
			height: 420px;
		}

		#lineup-banner, #action-banner {
			height: 320px;
		}
	}

	@media screen and (min-width: 2000px) {
		#keyart-wide {
			height: 480px;
		}
	}
</style>