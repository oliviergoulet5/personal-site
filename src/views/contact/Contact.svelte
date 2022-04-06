<div id="contact">
    <h1 class="header-lg">Contact</h1>
    <div>
        <form>
            <div class="email-name-row">
                <div class="email-group">
                    <label class="font-sm" for="email">Email</label>
                    <input name="email"/>
                </div>
                <div class='name-group'>
                    <label class="font-sm" for="name">Name</label>
                    <input name="name" />
                </div>
            </div>
            <div>
                <label class="font-sm" for="message">Message</label>
                <textarea name="message" rows={8} />
            </div>
            <input type="submit" value="Send" />
        </form>
    </div>
</div>

<style>
    #contact {
        margin-top: 4rem;
    }

    label {
        display: block;
        text-transform: uppercase;
        color: var(--light-grey);
        line-height: 1.5;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    form div {
        margin-bottom: 1rem;
        width: 100%;
    }

    input {
        display: inline-block;
        box-sizing: border-box;
    }

    input[name="email"], input[name="name"] {
        background-color: var(--grey);
        border-radius: 0.3rem;
        padding: 0.5rem;
        border: 1px solid #3D434B;
        outline: none;
        color: var(--white);
        width: 100%;
    }

    .email-name-row {
        display: flex;
        box-sizing: border-box;
    }

    .email-group, .name-group {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    textarea[name="message"] {
        display: inline-block;
        background-color: var(--grey);
        border: 1px solid #3D434B;
        border-radius: 0.3rem;
        padding: 0.5rem;
        outline: none;
        width: 100%;
        margin-left: 0.5rem;
        margin-right: 1rem;
        box-sizing: border-box;
        color: var(--white);
        font-size: 1rem;
        line-height: 1.5rem;
    }
</style>