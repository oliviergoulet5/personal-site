<script lang="ts">
    import Link from '../components/icons/Link.svelte';
    import Icon from '../components/Icon.svelte';
import React from '../components/icons/React.svelte';
import Electron from '../components/icons/Electron.svelte';
import Prisma from '../components/icons/Prisma.svelte';
import Collapsible from '../components/Collapsible.svelte';
import Tailwind from '../components/icons/Tailwind.svelte';
import TypeScript from '../components/icons/TypeScript.svelte';
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
        <div class="project">
            <div>    
                <h2 class='header font-sm'><a href="https://github.com/PrivaNoteTeam/PrivaNote">PrivaNote <Icon name="Link" width={20}><Link /></Icon></a></h2>
                <p>PrivaNote is a secure note-taking desktop application which runs on macOS and Windows.
                    It allows users to take notes in Markdown to allow for quick and beautiful notes on the fly.
                    <br/><br/>
                    Notes can synchronize with cloud storages such as Google Drive, or PrivaNote Vault.
                    If the user chooses PrivaNote Vault, they will have the ability to synchronize their notes privately
                    and securely with the use of E2E encryption.
                </p>
                <h3 class="font-sm">Technologies used</h3>
                <div class="tech">
                    <ul>
                        <li>
                            <Collapsible heading="React">
                                <span slot="icon">
                                    <Icon name="React" color="#61dafb">
                                        <React />
                                    </Icon>
                                </span>
                                <div slot="content">
                                    React was used as the main front-end library for composing the user interface.
                                </div>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible heading="Electron">
                                <span slot="icon">
                                    <Icon name="Electron" color="#9feaf9">
                                        <Electron />
                                    </Icon>
                                </span>
                                <div slot="content">
                                    Electron was used to create a cross-platform desktop application using web technologies.
                                </div>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible heading="Prisma">
                                <span slot="icon">
                                    <Icon name="Prisma" color="#38a169">
                                        <Prisma />
                                    </Icon>
                                </span>
                                <div slot="content">
                                    Prisma was used as the ORM which interacted with our database. Prisma also allowed us to quickly
                                    generate types for our models.
                                </div>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible heading="TailwindCSS">
                                <span style="line-height: 0;" slot="icon">
                                    <img width={32} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png?20211001194333" alt=""/>
                                </span>
                                <div slot="content">
                                    TailwindCSS allowed for quick and extremely customizable styling for our components. It also normalized of our styles which
                                    was necessary to maintain a consistent UI.
                                </div>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible heading="TypeScript">
                                <span style="line-height: 0; padding-left: 4px; padding-right: 4px;" slot="icon">
                                    <img width={24} alt="TS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" />
                                </span>
                                <div slot="content">
                                    TypeScript was the obvious choice for the language because of its type-safety.
                                </div>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible heading="Webpack">
                                <span style="line-height: 0;" slot="icon">
                                    <img width={32} src="https://gaeun917.github.io/assets/img/projects/badget/icon-webpack.png" alt="" />
                                </span>
                            </Collapsible>
                        </li>
                    </ul>
                </div>
                <h3 class='font-sm'>The Team</h3>
                <div class="team">
                    {#each privaNoteTeam as member}
                    <a href={member.url}><img src={member.avatarUrl} alt={member.name}/></a>
                    {/each}
                </div>
            </div>
            <div>
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

    .project {
        display: flex;
        flex-direction: column;
    }

    h3 {
        margin-top: 3rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
    }

    .team {
        display: flex;
    }

    .team img {
        border-radius: 9999px;
        width: 3rem;
        margin-left: 0.5rem;
    }

    ul {
        width: 100%;
    }

    @media (min-width: 640px) {
        ul { width: 50%; }
    }

    @media (min-width: 1280px) {
        .project {
            flex-direction: row;
            justify-content: space-between;
        }

        ul {
            width: 100%;
        }
    }

</style>