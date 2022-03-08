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
		font-weight: bold;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>