<script>
	export let source;
</script>

<div class="wrapper youtube-video">
	<iframe
			allow="clipboard-write; encrypted-media;"
			allowfullscreen
			src={source}
			title="YouTube video player"
	/>
</div>

<style>
	.wrapper {
		position: relative;
		height: 0;
		padding-bottom: 56.25%;
		overflow: hidden;
	}

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: none;
	}
</style>