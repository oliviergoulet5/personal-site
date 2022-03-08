<script lang="ts">
	import NavigationBar from './components/NavigationBar.svelte';
	import Home from './views/Home.svelte';
	import About from './views/About.svelte';

</script>

<header>
	<NavigationBar />
</header>
<main>
	<Home />
	<About />
</main>

<style>
	main {
		width: 80vw;
		background-color: black;
		margin: auto;
	}

	@media only screen and (max-width: 1024px) {
		main {
			width: 100vw;
		}
	}

</style>