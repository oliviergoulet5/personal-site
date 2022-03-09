<script lang="ts">
</script>

<div id="menu-overlay">
    <div id="menu-content">
        <ul>
            <li>Home</li>
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