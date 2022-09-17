<script>
    function onMouseEnter(event) {
        event.currentTarget.classList.add("hover");
        event.currentTarget.classList.remove("leaved");
    }

    function onMouseLeave(event) {
        const target = event.currentTarget;
        target.classList.remove("hover");
        target.classList.add("leaved");
        setTimeout(() => {
            target.classList.remove("leaved");
        }, 300);
    }
</script>

<div class="container">
    <a
        href="#information"
        class="button"
        on:mouseenter={onMouseEnter}
        on:mouseleave={onMouseLeave}>About Me</a
    >
    <a
        href="#skills"
        class="button"
        on:mouseenter={onMouseEnter}
        on:mouseleave={onMouseLeave}>Skills</a
    >
    <a
        href="#timeline"
        class="button"
        on:mouseenter={onMouseEnter}
        on:mouseleave={onMouseLeave}>Timeline</a
    >
    <a
        href="#contact"
        class="button"
        on:mouseenter={onMouseEnter}
        on:mouseleave={onMouseLeave}>Contact</a
    >
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: end;
        width: 100%;
    }
    .button {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 25px;
        margin: 5px 15px;
        padding: 6px;
        color: var(--main-tx-color-2);
        font-size: 20px;
        font-family: "BoldItalic";
        line-height: 1;
        text-decoration: none;
        transform: 300ms;
    }

    .button:after,
    .button:before {
        display: block;
        width: 0px;
        height: 1px;
        border-bottom: 1px solid var(--main-bg-color-1-transp);
        transition: 300ms;
        content: " ";
    }

    .button:after {
        margin-top: 1px;
        margin-right: 100%;
    }

    .button:before {
        margin-bottom: 5px;
        margin-left: 100%;
    }

    .button:global(.hover):after,
    .button:global(.hover):before {
        width: 100%;
        margin-right: 0;
        margin-left: 0;
    }

    .button:global(.leaved):after {
        margin-right: 0%;
        margin-left: 100%;
    }
    .button:global(.leaved):before {
        margin-right: 100%;
        margin-left: 0%;
    }

    .button:not([selected]):before {
        opacity: 0;
    }
</style>
