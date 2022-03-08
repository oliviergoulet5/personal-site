<script lang="ts">

</script>

<nav>
        <ul class="links">
            <li><a href='/#home'>Home</a></li>
            <li><a href='/#about'>About</a></li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
        </ul>
        <ul class="languages">
            <li>ENG</li>
            <li>FRA</li>
        </ul>
</nav>

<style>
	nav {
        display: grid;
        grid-template-columns: 1fr repeat(1, auto) 1fr;
        grid-column-gap: 5px;
        justify-items: center;
		padding: 1rem 0;
	}

    ul:nth-child(1) { grid-column-start: 2; }
    ul:nth-child(2) { margin-left: auto; }

    ul {
		display: flex;
		list-style-type: none;
		text-transform: uppercase;
        user-select: none;
    }

    ul.languages {
        margin-right: 2rem;
    }

    li {
        margin-left: 2rem;
    }

    li:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
</style>