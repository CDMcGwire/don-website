<script>
import YouTubeEmbed from "$lib/components/YouTubeEmbed.svelte";
</script>

<section id="splash">
	<div id="splash-border">
		<div id="splash-image">
			<a class="splash-link" href="https://store.steampowered.com/app/2571840/Defense_of_Nations/" target="_blank">
				Play it on Steam
			</a>
		</div>
	</div>
</section>

<section id="game-desc">
	<h1>A Base Defense Shooter</h1>
	<div class="subtitle">… for the Good of Humanity™️!</div>
	<div id="trailer"  class="video-box">
		<YouTubeEmbed source="https://www.youtube.com/embed/EX5pqTMwhQQ?si=kcP5iW9Cup42zt-r" />
	</div>
</section>

<style>
h1 {
	margin: 40px 0 0 0;
	font-family: "Jost", sans-serif;
	font-weight: 700;
	font-size: 2.2rem;
	font-variant: small-caps;
	color: #2F333F;
}

.subtitle {
	font-size: 1.4rem;
	font-weight: 400;
	margin-left: 3ch;
}

#splash {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1920px;
	height: 60vh;
}

#splash-border {
	box-sizing: border-box;
	flex: 1 1 auto;
	margin: 8px;
	padding: 8px;
	border: 8px solid black;
}

#splash-image {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-image: url('/keyart.png');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	font-size: 4rem;
}

#game-desc {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	padding: 8px;
	width: 100%;
}

#trailer {
	margin: 50px 0 80px 0;
}

.splash-link {
	margin-left: 4ch;
	margin-bottom: 5ex;
	padding: 12px;
	width: 6.6ch;
	font-size: 2.1rem;
	font-weight: bold;
	line-height: 1.8ex;
	color: #2F333F;
	background-color: #eeaf0f;
	border: 8px solid #E1DBC4;
	border-radius: 20px;
	outline: 4px solid #2F333F;
	transition: background-color 0.2s, border-color 0.2s, font-size 0.4s, width 0.4s;
}

.splash-link:focus, .splash-link:hover {
	background-color: #e7b746;
	border-color: #2F333F;
}

.video-box {
	width: 100%;
}

@media screen and (min-width: 750px) {
	h1 {
		font-size: 4rem;
	}

	.subtitle {
		font-size: 2rem;
		margin-left: 6ch;
	}
	
	#splash {
		height: 70vh;
	}
	
	#game-desc {
		width: 1000px;
	}
}

@media screen and (min-width: 1920px) {
	.splash-link {
		font-size: 3rem;
	}
}
</style>