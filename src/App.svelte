<script lang="ts">
	import NavigationBar from './components/NavigationBar.svelte';
	import Home from './views/home/Home.svelte';
	import About from './views/About.svelte';
	import Projects from './views/Projects.svelte';
	import MenuOverlay from './components/MenuOverlay.svelte';

	$: menuActive = false;
	const handleMenuClick = (event: MouseEvent) => {
		menuActive = !menuActive;
	}

	$: console.log(menuActive);
</script>

<header>
	<NavigationBar menuActive={menuActive} menuClick={handleMenuClick}/>
</header>
<main>
	<Home />
	<About />
	<Projects />
	{#if menuActive}
		<MenuOverlay />
	{/if}
</main>

<style>
	main {
		width: 75vw;
		margin: auto;
		position: relative;
		overflow: hidden;
	}

	@media only screen and (max-width: 1024px) {
		main {
			width: 96vw;
			min-width: 320px;
		}
	}

</style>