<section id="splash">
	<div id="splash-border"><div id="splash-image" /></div>
</section>

<section id="game-desc">
	<h1>A Base Defense Shooter</h1>
	<span class="subheader1">… for the Good of Humanity™️!</span>
</section>

<style>
h1 {
	margin: 40px 0 0 0;
	font-family: "Jost", sans-serif;
	font-weight: 700;
	font-size: 2.2rem;
	font-variant: small-caps;
	color: #000;
}

.subheader1 {
	font-size: 1.4rem;
	font-weight: 400;
	margin-left: 3ch;
}

#splash {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 90vh;
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

@media screen and (min-width: 750px) {
	h1 {
		font-size: 4rem;
	}

	.subheader1 {
		font-size: 2rem;
		margin-left: 6ch;
	}

	#game-desc {
		width: 750px;
	}
}
</style>