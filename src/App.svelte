<script lang="ts">
	import NavigationBar from './components/NavigationBar.svelte';
	import Home from './views/Home.svelte';
	import About from './views/About.svelte';
	import MenuOverlay from './components/MenuOverlay.svelte';

	$: menuActive = false;
	const handleMenuClick = (event: MouseEvent) => {
		menuActive = true;
	}

	$: console.log(menuActive);
</script>

<header>
	<NavigationBar menuClick={handleMenuClick}/>
</header>
<main>
	<Home />
	<About />
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