<script lang="ts">
import Footer from "./components/Footer.svelte";
import Header from "./components/Header.svelte";
import MainBoard from "./components/MainBoard.svelte";
import ModeController from "./components/ModeController.svelte";
import NumController from "./components/NumController.svelte";
</script>

<Header />

<div class="side-color" />

<main>
  <ModeController />
  <MainBoard />
  <NumController />
</main>

<Footer />

<style lang="scss" type="text/scss">
	@use "./styles/breakpoints" as *;

	main {
		margin: 0 auto;
		padding: 0 1em 5em;
		text-align: center;

		@include small {
			margin: 0;
		}
	}

	.side-color {
		box-sizing: border-box;
		height: 100vh;
		position: fixed;
		top: 0;
		width: 100%;

		@include large {
			border-left: 10vw solid #ff3e00;
			border-right: 10vw solid #ff3e00;
		}
	}
</style>
