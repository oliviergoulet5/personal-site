<script>
    import Button from '../components/Button.svelte';
</script>

<div id="home">
    <div id="home-content">
        <div id="summary">
            <h1>Hey, I'm Olivier Goulet 👋</h1>
            <p>Are you looking for a web developer for your project?</p>
            <p>Send me a message!</p>
            <div id="button-row">
                <Button text="Contact" type="secondary" />
                <Button text="Download CV" type="primary" />
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
        flex-direction: column;
        height: 100vh;
        justify-content: center;
    }

    #home-content {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        text-align: center;
    }

    #summary {
        align-self: center;
    }

    
    #summary h1 {
        font-size: 1.5rem;
        line-height: 1;
        font-weight: normal;
        margin-bottom: 1rem;
    }

    #summary p {
        color: var(--light-grey);
        font-size: 1.125rem;
        line-height: 1.75;
    }

    @media (min-width: 640px) {
        #home {
            justify-content: center;
        }

        #home-content {
            flex-direction: row;
            justify-content: flex-start;
            text-align: start;
        }

        #summary h1 {
            font-size: 3.75rem;
            line-height: 1;
        }
    }

    #button-row {
        display: flex;
        margin-top: 2rem;
        justify-content: center;
    }

    #portrait {
        margin-left: auto;
        margin-right: auto;
        border-radius: 9999px;
        border-width: 2px;
        border-style: solid;
        border-color: transparent;
        padding: 4px;
        width: 30vw;
        height: 30vw;
        margin-bottom: 2rem;
    }

    #portrait:hover {
        border-color: var(--white);
        animation-name: portrait-hover;
        animation-duration: 0.2s;
    }

    #portrait img {
        border-radius: 9999px;
        width: inherit;
        height: inherit;
    }

    @keyframes portrait-hover {
        from { border-color: transparent; }
        to { border-color: var(--white); }
    }
</style>