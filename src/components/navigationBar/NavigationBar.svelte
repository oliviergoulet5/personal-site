<script lang="ts">
    export let menuClick: (event: MouseEvent) => void;
    export let menuActive: boolean = false;
    import { langStore } from '../../stores';
    import RoundButton from '../RoundButton.svelte';
    import Icon from '../Icon.svelte';
    import Menu from '../icons/Menu.svelte';
    import Close from '../icons/Close.svelte';
    import { translations } from './translations';

    let lang: "en" | "fr";
    langStore.subscribe(value => lang = value);

    const changeLanguage = (language: "en" | "fr") => {
        langStore.set(language);
        console.log(lang);
    }

    $: text = translations[lang];

</script>

<nav>
    <div class="left">
        <p>Olivier Goulet</p>
    </div>
    <div class="center">
        <ul>
            <li><a href='/#home'>{text.links.home}</a></li>
            <li><a href='/#about'>{text.links.about}</a></li>
            <li><a href="/#projects">{text.links.projects}</a></li>
            <li><a href="/#resume">{text.links.resume}</li>
            <li><a href="/#contact">{text.links.contact}</a></li>
        </ul>
    </div>
    <div class="right">
        <ul>
            <li on:click={ () => { changeLanguage("en") }}>ENG</li>
            <li on:click={ () => { changeLanguage("fr") }}>FRA</li>
            
            <li class="nav-button">
                <RoundButton on:click={menuClick}>
                    <Icon name="Menu" color="white">
                        {#if !menuActive}
                            <Menu />
                        {:else}
                            <Close />
                        {/if}
                    </Icon>
                </RoundButton>
            </li>
        </ul>
    </div>
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        width: auto;
        align-items: center;
    }

    .nav-button {
        display: inline-block;
    }

    .center {
        display: none;
    }

    .right li:not(.nav-button) {
        display: none;
    }

    ul {
        list-style: none;
    }

    @media (min-width: 640px) {
        nav {
            display: grid;
            grid-template-columns: 1fr repeat(1, auto) 1fr;
            grid-column-gap: 5px;
            justify-items: center;
            font-weight: medium;
            text-transform: uppercase;
            padding: 3rem;
        }

        .nav-button {
            display: none;
        }

        .center {
            display: inline-block;
        }

        .center ul {
            display: flex;
        }

        ul li {
            margin-left: 2rem;
        }

        .right li:not(.nav-button) {
            display: inline-block;
        }
        nav div:nth-child(1) { margin-right: auto; }
        nav div:nth-child(2) { grid-column-start: 2; }
        nav div:last-child { margin-left: auto; }
    }
</style>