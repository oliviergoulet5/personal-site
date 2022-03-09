<script lang="ts">
    import Link from '../components/icons/Link.svelte';
    import Icon from '../components/Icon.svelte';
    interface TeamMember {
        name: string;
        url: string;
        avatarUrl: string;
    }
    const privaNoteTeam: TeamMember[] = [
        { name: "Olivier Goulet", url: "https://github.com/oliviergoulet5", avatarUrl: "https://avatars.githubusercontent.com/u/17685861?v=4" },
        { name: "Jason Xie", url: "https://github.com/thejasonxie", avatarUrl: "https://avatars.githubusercontent.com/u/34463193?v=4"},
        { name: "Parsa Parichehreh", url: "https://github.com/parsa111", avatarUrl: "https://avatars.githubusercontent.com/u/48108158?v=4"},
        { name: "Ehsan Hazari", url: "https://github.com/EHSANHAZARI", avatarUrl: "https://avatars.githubusercontent.com/u/57685610?v=4" }
    ];
</script>

<div id="projects">
    <h1 class="header-lg">Projects</h1>
    <div class="projects-content">
        <h2 class='header font-sm'><a href="https://github.com/PrivaNoteTeam/PrivaNote">PrivaNote <Icon name="Link" width={20}><Link /></Icon></a></h2>
        <p>PrivaNote is a secure note-taking desktop application which runs on macOS and Windows.
            It allows users to take notes in Markdown to allow for quick and beautiful notes on the fly.
            <br/><br/>
            Notes can synchronize with cloud storages such as Google Drive, or PrivaNote Vault.
            If the user chooses PrivaNote Vault, they will have the ability to synchronize their notes privately
            and securely with the use of E2E encryption.
        </p>
        <h3 class='font-sm'>THE TEAM</h3>
        <div class="team">
            {#each privaNoteTeam as member}
            <a href={member.url}><img src={member.avatarUrl} alt={member.name}/></a>
            {/each}
        </div>
        <figure>
            <img 
                src="https://camo.githubusercontent.com/100ab20dc9470f417c33ad2586a27021ce9cb09487a31a3037f08eb50664ed04/68747470733a2f2f692e696d6775722e636f6d2f4a4144784c47312e706e67"
                alt="PrivaNote UI"
            />
            <figcaption class="font-sm">
                Editing a note in PrivaNote.
            </figcaption>
        </figure>
    </div>
</div>

<style>
    #projects {
        min-height: 100vh;
    }

    figure {
        margin-top: 2rem;
        text-align: center;
    }

    figure img {
        border-radius: 0.5rem;
        box-shadow: 5px 5px 10px #111;
        width: 75%;
    }

    figcaption {
        margin-top: 1rem;
        font-style: italic;
    }

    .projects-content {
        display: flex;
        flex-direction: column;
    }

    h3 {
        margin-top: 3rem;
        margin-bottom: 1rem;
    }

    .team {
        display: flex;
    }

    .team img {
        border-radius: 9999px;
        width: 3rem;
        margin-left: 0.5rem;
    }

</style>