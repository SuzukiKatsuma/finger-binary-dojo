<script lang="ts">
	import Header from "./components/Header.svelte";
	import MainBoard from "./components/MainBoard.svelte";
	import Controller from "./components/Controller.svelte";
	import Footer from "./components/Footer.svelte";
</script>

<Header />

<main>
	<MainBoard />
	<Controller />
</main>

<Footer />

<style lang="scss" type="text/scss">
	@import "./styles/breakpoints";

	main {
		margin: 0 auto;
		padding: 0 1em;
		text-align: center;

		@include small {
			margin: 0;
		}
	}
</style>
