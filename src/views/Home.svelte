<script>

</script>

<div id="home">
    <div id="home-content">
        <div id="summary">
            <h1>Hey, I'm Olivier Goulet 👋</h1>
            <p>Are you looking for a web developer for your project?</p>
            <p>Send me a message!</p>
            <div id="button-row">
                <span class="button download-button font-sm">Download CV</span>
                <span class="button contact-button font-sm">Contact</span>

            </div>
        </div>
        <div id="portrait">
            <img src="images/portrait.png" alt=""/>
        </div>
    </div>
</div>

<style>

    #home {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
    }

    #home-content {
        display: flex;
    }

    #summary {
        margin-left: 12rem;
        align-self: center;
    }
    
    #summary h1 {
        font-size: 3.75rem;
        line-height: 1;
        font-weight: normal;
        margin-bottom: 1rem;
    }

    #summary p {
        color: var(--light-grey);
        font-size: 1.125rem;
        line-height: 1.75;
    }

    #button-row {
        display: flex;
        margin-top: 2rem;
    }

    .download-button {
        background-color: var(--green);
        color: var(--white);
    }

    .contact-button {
        background-color: var(--grey);
        color: var(--white);
        margin-left: 1rem;
    }

    .button {
        text-transform: uppercase;
        border-radius: 0.375rem;
        max-width: fit-content;
        padding: 1rem;
        display: block;
        cursor: pointer;
    }

    #portrait {
        align-self: center;
        margin-left: auto;
        margin-right: auto;
    }

    #portrait img {
        border-radius: 9999px;
        width: 30vw;
    }
</style>