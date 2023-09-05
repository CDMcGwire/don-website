<script>
	import '$lib/styles/normalize.css'
	import '$lib/styles/global.css'
	import LogoYouTube from '$lib/icon/youtube.svelte'
	import LogoInsta from '$lib/icon/instagram.svelte'
	import LogoX from '$lib/icon/x-logo.svelte'
</script>

<nav>
<a id="home" href="/"><h2>DEFENSE <span>of</span> NATIONS</h2></a>

</nav>

<slot />

<footer>
<div class="box-footer-block">
<div class="box-footer-links">
<div class="box-additional-info">
<a href="/faq">FAQ</a>
<a href="/press">Press kit</a>
<a href="https://twitter.com/tgsfriendship">Updates</a>
</div>
<div class="box-social">
<a class="link-logo" href="https://twitter.com/tgsfriendship"><LogoX /></a>
<a class="link-logo" href="https://www.youtube.com/@TheGoodshipFriendship"><LogoYouTube /></a>
<!--<a class="link-logo" href="#"><LogoInsta /></a>-->
</div>
</div>
<div>2023 The Goodship Friendship. All rights reserved.</div>
</div>
</footer>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@700&display=swap');

:global(body) {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	min-height: 100vh;
	background: #E1DBC4;
	font-family: "Jost", sans-serif;
}

h2 {
	font-weight: 700;
	font-size: 9vw;
	margin: 1ex 0;
}

@media screen and (min-width: 400px) {
	h2 {
		font-size: 2.2rem;
	}
}

:global(a) {
	color: #0397CC;
	text-decoration: none;
	transition: color 0.2s;
}

:global(a):hover, :global(a):focus {
	color: #74C5E2;
}

#home {
	color: black;
}

footer {
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 100px;
	padding-bottom: 50px;
	width: 100%;
}

.box-footer-block {
	box-sizing: border-box;
	flex: 0 1 600px;
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
	font-size: 1.1rem;
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
	margin-right: 0px;
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
</style>