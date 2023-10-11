<article>
	<img alt="The Goodship Friendship Logo" id="tgsfs-logo" src="/tgsfriendship-logo-transparent.png" />
	<div class="caption">“We make games that have nothing to do with friendship.”</div>
	<h1>Who are we?</h1>
	<div class="profile right">
		<div class="bio">
			<h1>Connor McGwire</h1>
			<div class="subtitle">Designer & Programmer</div>
			<p>
				We is mostly just me, Connor McGwire. I'm a Software Engineer who's worked professionally in banking and
				military technology, but the visual arts are where my passions lie (specifically games, believe it or
				not).
			</p>
			<p>
				Eventually I realized that if I wanted to make a game studio like I always planned, the "right time"
				would never come and I needed to get a bit more bull-headed about it. So here I am and
				<a href="https://store.steampowered.com/app/2571840/Defense_of_Nations/">here's the first game
					(Alpha)</a> of what will hopefully be many over the years.
			</p>
			<p>
				Oh, and <a href="https://cdmcgwire.com/novels">I wrote a novel at some point</a>. I think it's pretty
				neat. I'd love to hear what you think of it.
			</p>
			<p><a href="https://twitter.com/connor_mcgwire">@connor_mcgwire</a></p>
		</div>
		<img alt="Connor McGwire profile" src="/connor-shades.jpg">
	</div>
</article>

<style>
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

	#tgsfs-logo {
		width: 90vw;
		max-width: 500px
	}

	.caption {
		align-self: flex-end;
		margin-top: 1ex;
		margin-right: 0;
		max-width: 24ch;
		font-style: italic;
		font-weight: bold;
		color: #fd0000;
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

	.profile {
		margin-top: 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.bio {
		order: 2;
	}

	.bio > p {
		max-width: 480px;
	}
	
	.bio > h1 {
		margin: 0;
		font-size: 1.8em;
	}

	.profile > img {
		box-sizing: border-box;
		width: 200px;
		border: 4px solid #E1DBC4;
		border-radius: 99999px;
		outline: 4px solid #2F333F;
	}

	.profile.right > img {
		order: 1;
	}
	
	.subtitle {
		margin: 0;
		padding: 0 12px;
		font-style: italic;
		font-weight: bold;
		color: #4a4b59;
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

	@media screen and (min-width: 800px) {
		p, h1, h2, h3, ul, blockquote {
			align-self: center;
			margin-right: 200px;
			padding: 0;
		}

		.caption {
			align-self: center;
			margin-left: 350px;
		}

		.profile {
			display: flex;
			flex-direction: row;
			align-items: flex-start;
		}

		.bio {
			order: 2;
		}

		.bio > p {
			max-width: 500px;
			margin-right: 0;
		}

		.profile > img {
			box-sizing: border-box;
			width: 200px;
			border: 4px solid #E1DBC4;
			border-radius: 99999px;
			outline: 4px solid black;
		}

		.profile.right > img {
			order: 3;
			margin-left: 2ch;
		}
		
		.subtitle {
			padding: 0;
		}
	}
</style>