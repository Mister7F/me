<script>
    export let title;
    export let description;
    export let link = false;
</script>

<a
    class="information {link ? '' : 'disabled'}"
    href={link || ""}
    target="_blank"
    on:click={(event) => !link && event.preventDefault()}
>
    <h5 class="title">{title}</h5>
    <hr />
    <div>
        {description}
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
        ><line class="top" x1="0" y1="0" x2="300%" y2="0" /><line
            class="left"
            x1="0"
            y1="-200%"
            x2="0"
            y2="100%"
        /><line class="bottom" x1="-200%" y1="100%" x2="200%" y2="100%" /><line
            class="right"
            x1="100%"
            y1="0"
            x2="100%"
            y2="400%"
        /></svg
    >
    {#if link}
        <button>Learn more</button>
    {/if}
</a>

<style>
    .information {
        --width: 500px;
        --height: 230px;

        position: relative;
        display: inline-block;
        box-sizing: border-box;
        width: var(--width);
        height: var(--height);
        margin: 15px;
        padding: 10px 20px;
        color: var(--main-tx-color-1);
        font-family: Default;
        text-align: center;
        text-decoration: none;
        background: var(--main-bg-color-1);
        transform-style: preserve-3d;
        cursor: pointer;
    }
    .information.disabled {
        cursor: initial;
    }
    .title {
        margin: 10px;
        color: var(--main-tx-color-1);
        font-size: 1.2em;
        font-family: Bold;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    .information hr {
        height: 1px;
        margin: 12px 18px;
        color: var(--main-br-color-1);
        font-family: "Default";
        border-top: 1px;
        border-right: 0px;
        border-left: 0px;
        opacity: 0.5;
    }

    .information > div {
        display: block;
        padding: 5px;
        font-weight: 400;
        font-size: 1em;
        text-align: justify;
    }

    .information svg {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background-color: transparent;
        border: 1px solid var(--main-br-color-1);
    }

    .information svg line {
        -webkit-transition: all 0.8s ease-in-out;
        transition: all 0.8s ease-in-out;
        fill: none;
        stroke: var(--main-br-color-1);
        stroke-width: 1;
    }

    .information:hover svg line {
        -webkit-transition-delay: 0.1s;
        transition-delay: 0.1s;
    }

    .information svg line.top,
    .information svg line.bottom {
        stroke-dasharray: var(--width);
    }

    .information svg line.left,
    .information svg line.right {
        stroke-dasharray: var(--height);
    }

    .information:hover svg line.top {
        -webkit-transform: translateX(-200%);
        transform: translateX(-200%);
    }

    .information:hover svg line.bottom {
        -webkit-transform: translateX(200%);
        transform: translateX(200%);
    }

    .information:hover svg line.left {
        -webkit-transform: translateY(200%);
        transform: translateY(200%);
    }

    .information:hover svg line.right {
        -webkit-transform: translateY(-200%);
        transform: translateY(-200%);
    }

    button {
        display: inline-block;
        height: auto;
        margin: 10px;
        padding: 0px 8px;
        color: var(--main-tx-color-1);
        font-size: 18px;
        font-family: Default;
        text-transform: uppercase;
        background-color: transparent;
        border: none;
        cursor: pointer;
        -webkit-transition: background-color 0.1s ease-out;
        transition: all 500ms ease;
        transition: background-color 0.1s ease-out;
    }

    button:before,
    button:after {
        display: block;
        width: calc(50%);
        height: 1px;
        margin: auto;
        background-color: var(--main-br-color-1);
        transform: scaleX(0);
        transition: all 0.3s ease;
        content: "";
    }

    button::before {
        margin-bottom: 4px;
    }
    button::after {
        margin-top: 4px;
    }

    .information:hover button::before,
    .information:hover button::after {
        transform: scaleX(2.5);
    }
    .information:hover button {
        letter-spacing: 5px;
        border: none;
    }
</style>
