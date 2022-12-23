<script>
    import Navbar from './navbar.svelte';
    import Footer from './footer.svelte';
    import heroFigure from '/src/lib/img/hero-figure.png';
    import heroSig from '/src/lib/img/hero-signature.png';
</script>

<svelte:head>
    <title>Milkcee Studios</title>
</svelte:head>

<section class="hero">
    <div class="block left"></div>
    <div class="block right"></div>
    <img class="hero-sig" src={heroSig} alt="Hero section signature" />
    <img class="hero-figure" src={heroFigure} alt="Hero section figure" />
    <div class="explore">
        <p>Explore</p>
        <div class="line"></div>
    </div>
</section>

<Navbar />

<div class="container">
    <section>
        <h2>Timeline</h2>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    </section>
    
    <section>
        <h2>Works</h2>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    </section>
    
    <section>
        <h2>Hello World</h2>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    </section>
</div>

<Footer />

<style lang="scss">
    section.hero {
        height: 48em;
        display: flex;
        .block {
            flex: 1;
        }
        .right {
            background-color: $text-art;
        }

        img {
            position: absolute;
            pointer-events: none;

            &.hero-sig {
                width: 85em;
                left: 50%;
                margin-left: -32em;
                margin-top: -10em;
            }
            &.hero-figure {
                width: 36em;
                height: auto;
                top: 2em;
                left: 50%;
                margin-left: -15em;
            }
        }

        .explore {
            position: absolute;
            display: flex;
            align-items: center;
            margin-top: 38em;
            transform: rotate(90deg);
            p {
                flex-grow: 0;
                padding-right: 1em;
            }

            .line {
                width: 4em;
                flex-grow: 1;
                height: 3px;
                background-color: $text-tech;
            }
        }
    }

    .container {
        h2 {
            font-size: 2.2rem;
        }

        section {
            padding-bottom: 8em;
        }

    }
</style>
