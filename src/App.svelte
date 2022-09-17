<script>
    import Header from "./Header.svelte";
    import Information from "./Information.svelte";
    import Skills from "./Skills.svelte";
    import Timeline from "./Timeline.svelte";
    import Particles from "./Particles.svelte";
    import Contact from "./Contact.svelte";
</script>

<Particles />
<div class="container">
    <Header />
    <Information />
    <Skills />
    <Timeline />
    <Contact />
</div>

<style>
    .container {
        max-width: 2500px;
        margin: auto;
    }
</style>
