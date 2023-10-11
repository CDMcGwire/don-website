<script>
	import '$lib/styles/normalize.css'
	import '$lib/styles/global.css'
	import LogoYouTube from '$lib/icon/youtube.svelte'
	import LogoX from '$lib/icon/x-logo.svelte'
	import DonLogoLight from "$lib/icon/DonLogoLight.svelte";
</script>

<nav>
	<a id="home" href="/"><DonLogoLight /></a>
</nav>

<slot />

<footer>
	<div class="box-footer-block">
		<div class="box-footer-links">
			<div class="box-additional-info">
				<a href="/the-team">The Team</a>
				<a href="/press">Press kit</a>
				<a href="https://twitter.com/tgsfriendship">Updates</a>
			</div>
			<div class="box-social">
				<a class="link-logo" href="https://twitter.com/tgsfriendship">
					<LogoX />
				</a>
				<a class="link-logo" href="https://www.youtube.com/@TheGoodshipFriendship">
					<LogoYouTube />
				</a>
				<!--<a class="link-logo" href="#"><LogoInsta /></a>-->
			</div>
		</div>
		<div>2023 The Goodship Friendship. All rights reserved.</div>
	</div>
</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,700;1,400;1,700&display=swap');

	:global(html) {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0;
		padding: 0;
	}
	
	:global(body) {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		min-height: 100vh;
		margin: 0;
		padding: 0;
		background: #E1DBC4;
		font-family: "Jost", sans-serif;
	}

	:global(a) {
		color: #0397CC;
		text-decoration: none;
		transition: color 0.2s;
	}

	:global(a):hover, :global(a):focus {
		color: #74C5E2;
	}
	
	nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		width: 100%;
	}

	#home {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		width: 90%;
		margin: 8px 0;
	}

	footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 100px;
		padding-bottom: 50px;
		width: 100%;
		font-weight: bold;
	}

	.box-footer-block {
		box-sizing: border-box;
		flex: 0 1 500px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding: 0 8px;
	}

	.box-footer-links {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}

	.box-additional-info {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		max-width: 800px;
		height: 220px;
		font-size: 1.3rem;
	}

	.box-additional-info > * {
		margin-top: 20px;
		margin-bottom: 10px;
	}

	.box-social {
		display: flex;
		flex-direction: row-reverse;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		max-width: 120px;
	}

	.box-social > * {
		margin-left: 6px;
		margin-bottom: 6px;
	}

	.box-social > *:last-child {
		margin-right: 0;
	}

	.link-logo {
		box-sizing: border-box;
		display: block;
		width: 50px;
		height: 50px;
		padding: 6px;
		border: 3px solid black;
		transition: border-color 0.2s;
	}

	.link-logo:hover, .link-logo:focus {
		border-color: #0397CC;
	}

	@media screen and (min-width: 800px) {
		#home {
			width: 675px;
		}
		
		.box-footer-block {
			flex: 0 1 550px;
			margin-right: 250px;
		}
	}
</style>