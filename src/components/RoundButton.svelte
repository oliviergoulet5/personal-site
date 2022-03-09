<script lang="ts">

</script>

<span on:click>
    <slot />
</span>

<style>
    span {
        display: inline-flex;
        border-width: 2px;
        border-style: solid;
        border-color: var(--grey);
        border-radius: 9999px;
        max-width: 3rem;
        max-height: 3rem;
        min-width: 3rem;
        min-height: 3rem;
        cursor: pointer;
        align-items: center;
        justify-content: center;
    }

    span:hover {
        border-color: white;
        animation-name: hover-button;
        animation-duration: 0.2s;
    }

    @keyframes hover-button {
        from { border-color: var(--grey); }
        to { border-color: var(--white); }
    }
</style>