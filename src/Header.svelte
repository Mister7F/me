<script>
    import Me from "./Me.svelte";
    import Bar from "./Bar.svelte";
</script>

<div class="container">
    <Bar />
    <div class="rectangle">
        <h1>Debauche Stéphane</h1>
        <hr />
        <h2>Development & Security Engineer</h2>
        <hr />
        <h2 class="citation">
            The only limit is the one you impose on yourself.
        </h2>
    </div>
</div>

<style>
    h1 {
        font-family: "BoldItalic";
    }
    .citation {
        font-family: "Manuscrite";
    }
    .container {
        height: 800px;
        overflow: hidden;
        color: var(--main-tx-color-2);
        text-align: center;
        background-color: var(--main-bg-color-2);
        background-image: url("/assets/images/background.png");
        background-size: cover;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
            0 15px 12px rgba(0, 0, 0, 0.22);
    }

    .rectangle {
        width: fit-content;
        margin: auto;
        margin-top: 200px;
        margin-bottom: 30px;
        padding: 10px 50px;
        text-align: center;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 15px;
    }
</style>
