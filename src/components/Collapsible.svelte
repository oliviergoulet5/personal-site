<script lang="ts">
    import Icon from "./Icon.svelte";   
    import ChevronDown from "./icons/ChevronDown.svelte";
import ChevronUp from "./icons/ChevronUp.svelte";

    export let heading: string;
    $: open = false;

    const handleClick = () => {
        open = !open;
    }
</script>

<div class='collapsible'>
    <div class="collapsible-button" on:click={ handleClick }>
        <div class='left'>
            <slot class="icon" name="icon" />
            <span>{heading}</span>
        </div>
        <span class="right">
        <Icon name="Chevron">
            {#if !open}
                <ChevronDown />
            {:else}
                <ChevronUp />
            {/if}
        </Icon>
        </span>
    </div>
    {#if open}
    <div class="collapsible-content font-sm">
        <span class="vertical-line"></span>
        <div>
            <slot name="content" />
        </div>
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
        box-sizing: border-box;
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
        display: flex;
        padding: 0.5rem;
        margin-top: 0.25rem;
        border-radius: 0.5rem;
        line-height: 1.5;
        color: var(--light-grey);
    }

    .vertical-line {
        background-color: var(--light-grey);
        padding-left: 1px;
        margin-left: 1rem;
        margin-right: 1rem;
        display: inline-block;
    }

    .left {
        display: flex;
        align-items: center;
    }
</style>