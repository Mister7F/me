<script>
    export let direction = "left";
    export let date;

    export let title;
    export let description;

    export let enterprise;
    export let enterpriseLink;

    export let project = null;
    export let projectLink = null;

    let innerWidth = 0

    $: directionForced = innerWidth < 800 ? 'right' : direction;
</script>

<svelte:window bind:innerWidth />

<div class="container {directionForced}" observevisibility="" visible="">
    <div class="content">
        <a href={enterpriseLink} target="_blank">{enterprise}</a>
        <h2>{date}</h2>
        <br />
        <h1>{title}</h1>
        <br />
        <p>{description}</p>
        {#if projectLink && project}
        <a href={projectLink} target="_blank">{project}</a>
        {/if}
    </div>
</div>

<style>
    * {
        box-sizing: border-box;
    }
    /* Container */
    .container {
        position: relative;
        width: 30%;
        padding: 10px 40px;
        background-color: inherit;
    }

    /* Circle on the timeline */
    .container::after {
        position: absolute;
        top: 15px;
        right: -17px;
        z-index: 1;
        width: 25px;
        height: 25px;
        background-color: var(--main-bg-color-1);
        border: 5px var(--main-br-color-1) solid;
        border-radius: 50%;
        content: "";
    }

    .left {
        left: 20%;
    }

    .right {
        left: 50%;
    }
    .right::after {
        left: -18px;
    }

    /* Timeline content */
    .content {
        position: relative;
        display: block;
        padding: 0;
        color: var(--main-tx-color-1);
        font-size: 18px;
        text-align: right;
        background-color: var(--main-bg-color-1-transp);
    }

    .right .content {
        text-align: left;
    }

    /* Title */
    h1 {
        display: inline-block;
        margin: 10px;
        margin-right: 0;
        margin-left: 0;
        color: var(--main-tx-color-1);
        font-size: 22px;
        font-family: "Bold";
    }

    /* Date */
    h2 {
        display: inline-block;
        height: 18px;
        margin-right: 0;
        margin-left: 0;
        color: var(--main-tx-color-1);
        font-size: 18px;
        font-family: "Default";
    }

    .right .content > a:first-child {
        float: right;
    }

    .left .content > a:first-child {
        float: left;
    }

    a:first-child {
        margin-top: 16px;
    }

    a {
        color: var(--main-tx-color-1);
        text-decoration: underline;
    }

    /* ANIMATIONS */
    @keyframes bounceInLeft {
        0%,
        60%,
        75%,
        90%,
        100% {
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        0% {
            transform: translate3d(-300px, 0, 0);
            opacity: 0;
        }

        60% {
            transform: translate3d(25px, 0, 0);
            opacity: 1;
        }

        75% {
            transform: translate3d(-10px, 0, 0);
        }

        90% {
            transform: translate3d(5px, 0, 0);
        }

        100% {
            transform: none;
        }
    }

    @keyframes bounceInRight {
        0%,
        60%,
        75%,
        90%,
        100% {
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        0% {
            transform: translate3d(300px, 0, 0);
            opacity: 0;
        }

        60% {
            transform: translate3d(-25px, 0, 0);
        }

        75% {
            transform: translate3d(10px, 0, 0);
        }

        90% {
            transform: translate3d(-5px, 0, 0);
        }

        100% {
            transform: none;
        }
    }

    .left[visible] {
        animation-name: bounceInLeft;
        animation-duration: 1s;
    }
    .right[visible] {
        animation-name: bounceInRight;
        animation-duration: 1s;
    }

    @media (max-width: 800px) {
        .container {
            width: 80%;
        }
    }
</style>
