<script>
    import Card from "./Card.svelte";
</script>

<h1 class="section_title" id="information">Information</h1>

<div class="container">
    <Card
        title="About Me"
        description="I'm a Software Engineer who love CTFs and learning new technologies.
        Checkout my personal projects on GitHub or the challenges I solved on Root-Me / CryptoHack!"
    />
    <Card
        title="Root Me"
        description="Root Me is a platform allowing everyone to test and improve their
        knowledge in the field of IT security and hacking through the publication
        of challenges, solutions and articles."
        link="https://www.root-me.org/Mister7F?q=%2Fmister7f"
    />
    <Card
        title="CryptoHack"
        description="CryptoHack is a platform with cryptography challenges.
        The idea of the platform is to learn many cryptographic principles by implementing
        attacks on them."
        link="https://cryptohack.org/user/Mister7F/"
    />
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 50px;
    }
</style>
