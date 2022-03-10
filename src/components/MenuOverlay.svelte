<script lang="ts">
    import { translations } from './navigationBar/translations';
    import { langStore } from '../stores';
    export let handleMenuClick: (event: MouseEvent) => void;
    let lang: "en" | "fr";
    langStore.subscribe(value => lang = value);
    $: text = translations[lang];

</script>

<div id="menu-overlay">
    <div id="menu-content">
        <ul on:click={handleMenuClick}>
            <li><a href="/#home">{text.links.home}</a></li>
            <li><a href="/#about">{text.links.about}</a></li>
            <li><a href="/#projects">{text.links.projects}</a></li>
            <li><a href="/#resume">{text.links.resume}</a></li>
            <li><a href="/#contact">{text.links.contact}</a></li>
        </ul>
    </div>
</div>

<style>
    #menu-overlay {
        height: 100%;
        width: 100%;
        background-color: var(--black);
        z-index: 20;
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        animation-name: menu-appear;
        animation-duration: 0.2s;
    }

    @keyframes menu-appear {
        from { background-color: transparent; }
        to { background-color: var(--black); }
    }

    ul {
        list-style: none;
    }

    li {
        padding: 1rem;
        border-top: 1px solid var(--grey);
        border-bottom: 1px solid var(--grey);
        cursor: pointer;
    }

    li:hover {
        color: var(--light-grey);
    }
</style>