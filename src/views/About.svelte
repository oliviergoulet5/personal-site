<script>

</script>

<div id="about">
    <h1>About</h1>
    <div id="content">
        <div>
            <h2 class="font-sm">About Me</h2>
            <p>
                I've always been passionate about becoming a software developer. 
                I decided to pursue web development because it is what I think to be the most fun. 
                When I am not sitting at a computer I enjoy watching sports and movies with family & friends.
            </p>
        </div>
        <div>
            <h2 class="font-sm">Education</h2>
            <p>
                In 2018, I moved to Toronto to study Computer Programming & Analysis at Seneca College.
                <br /><br />
                During my college years, I attended multiple hackathons and met plenty of interesting future software developers.
                These events inspired me to keep on learning beyond the standard curriculum and to pursue side-projects that I can be proud of.
            </p>
        </div>
    </div>
</div>

<style>
    #about {
        padding-top: 3rem;
        min-height: 100vh;
    }

    h1 {
        margin-bottom: 1.75rem;
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