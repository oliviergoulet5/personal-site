<script lang="ts">
	import NavigationBar from './components/navigationBar/NavigationBar.svelte';
	import Home from './views/home/Home.svelte';
	import About from './views/about/About.svelte';
	import Projects from './views/projects/Projects.svelte';
	//import Contact from './views/contact/Contact.svelte';
	import MenuOverlay from './components/MenuOverlay.svelte';

	$: menuActive = false;
	const handleMenuClick = (event: MouseEvent) => {
		menuActive = !menuActive;
	}

	$: console.log(menuActive);
</script>

<header>
	<p class="banner font-sm">⚠️ The website is still a work in progress!</p>
	<NavigationBar menuActive={menuActive} menuClick={handleMenuClick}/>
</header>
<main>
	<Home />
	<About />
	<Projects />
	<!--<Contact />-->
	{#if menuActive}
		<MenuOverlay handleMenuClick={handleMenuClick}/>
	{/if}
</main>

<style>
	main {
		width: 75vw;
		margin: auto;
		position: relative;
		overflow: hidden;
	}

	.banner {
		background-color: rgba(251, 191, 36, 0.5);
		border-radius: 5px;
		width: 95vw;
		padding: 0.5rem;
		text-align: center;
		margin: auto;
		margin-top: 0.5rem;
		border: solid 1px #fbbf24;
	}

	@media only screen and (max-width: 1024px) {
		main {
			width: 96vw;
			min-width: 320px;
		}
	}

</style>