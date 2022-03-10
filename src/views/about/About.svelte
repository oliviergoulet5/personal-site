<script lang="ts">
    import { translations } from './translations';
    import { langStore } from '../../stores';

    let lang: "en" | "fr";
    langStore.subscribe(value => lang = value);

    $: text = translations[lang];
</script>

<div id="about">
    <h1 class="header-lg">{text.header}</h1>
    <div id="content">
        <div>
            <h2 class="font-sm">{text.aboutMe.header}</h2>
            <p>
                { text.aboutMe.paragraph }
            </p>
        </div>
        <div>
            <h2 class="font-sm">{text.education.header}</h2>
            <p>
                { text.education.summary}
                <br /><br />
                { text.education.hackathons }
            </p>
        </div>
    </div>
</div>

<style>
    #about {
        padding-top: 3rem;
        min-height: 100vh;
    }


    #content {
        display: flex;
        flex-direction: column;
    }

    #content div {
        margin-bottom: 3rem;
    }
    
    #content h2 {
        text-transform: uppercase;
        color: var(--green);
        margin-bottom: 1.5rem;
    }

    #content p {
        display: inline-block;
        max-width: 32rem;
        color: var(--light-grey);
    }

    @media (min-width: 640px) {
        #content {
            display: flex;
            flex-direction: row;
        }

        #content div {
            margin-bottom: 0;
            margin-right: 3rem;
        }
    }

</style>