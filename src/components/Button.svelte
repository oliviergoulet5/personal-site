<script lang="ts">
    export let text: string;
    export let type: 'primary' | 'secondary' = 'primary';

</script>

<div class="outer">
    <div class={`inner inner-${type}`}>
        { text }
    </div>
</div>

<style>
    div {
        display: inline-block;
        vertical-align: middle;
    }

    .inner {
        border-style: solid;
        border-color: var(--grey);
        border-radius: 9999px;
        border-width: 2px;
        padding: 1rem;
        min-width: 6rem;
        text-align: center;
    }

    .inner:hover {
        border-color: transparent;
    }

    .outer {
        border-style: solid;
        border-color: transparent;
        border-radius: 9999px;
        border-width: 2px;
        padding: 1px;
        cursor: pointer;
    }

    .outer:hover {
        animation-name: outer-hover;
        animation-duration: 0.5s;
        border-color: var(--green);
        padding: 0px;
        width: calc(auto + 3px);
        height: calc(auto + 3px);
    }

    @keyframes outer-hover {
        from {
            border-color: transparent;
            padding: 1px;
            width: auto;
            height: auto;
        }

        to {
            border-color: var(--green);
            padding: 0px;
            width: calc(auto + 3px);
            height: calc(auto + 3px);
        }
    }
    
</style>