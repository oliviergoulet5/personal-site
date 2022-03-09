<script lang="ts">
    import RoundButton from '../components/RoundButton.svelte';
    import Icon from '../components/Icon.svelte';
    import Menu from './icons/Menu.svelte';
</script>

<nav>
    <div class="left">
        <p>Olivier Goulet</p>
    </div>
    <div class="center">
        <ul>
            <li><a href='/#home'>Home</a></li>
            <li><a href='/#about'>About</a></li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
        </ul>
    </div>
    <div class="right">
        <ul>
            <li>ENG</li>
            <li>FRA</li>
            
            <li class="nav-button">
                <RoundButton>
                    <Icon name="Menu" color="white"><Menu/></Icon>
                </RoundButton>
            </li>
        </ul>
    </div>
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        padding: 3rem;
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