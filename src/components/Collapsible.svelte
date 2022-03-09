<script lang="ts">
    import Icon from "./Icon.svelte";   
    import ChevronDown from "./icons/ChevronDown.svelte";

    export let heading: string;
    $: open = false;

    const handleClick = () => {
        open = !open;
    }
</script>

<div class='collapsible'>
    <div class="collapsible-button" on:click={ handleClick }>
        <div class='left'>
            <slot name="icon" />
            <span>{heading}</span>
        </div>
        <span class="right">
        <Icon name="Chevron Down">
            <ChevronDown />
        </Icon>
        </span>
    </div>
    {#if open}
    <div class="collapsible-content">
        <slot name="content" />
    </div>
    {/if}
</div>

<style>
    .collapsible {
        width: 100%;
    }
    .collapsible-button {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        padding: 0.5rem;
        border-radius: 0.5rem;
    }

    .collapsible-button:hover {
        background-color: var(--grey);
    }

    .collapsible-button span {
        margin-left: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
    }

    .collapsible-content {
        background-color: black;
    }
</style>