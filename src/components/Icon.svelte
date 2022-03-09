<script lang="ts">
    export let width = 32;
    export let height = 32;
    export let name: string;
    export let color = 'currentColor';

</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    {width}
    {height}
    preserveAspectRatio="xMinYMin slice"
    viewBox="0 0 512 512"
    aria-labelledby={name}
    role="presentation"
>
    <title id={name} lang="en">{`${name} icon`}</title>
    <g fill={color}>
        <slot />
    </g>
</svg>

<style>
    svg {
        display: inline-block;
        vertical-align: middle;
    }
</style>