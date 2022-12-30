<script>
    import Navbar from '../lib/components/Navbar.svelte';
    import Footer from '../lib/components/Footer.svelte';
    import TimeBlock from '../lib/components/TimeBlock.svelte';
    import ArrowLink from '../lib/components/ArrowLink.svelte';
    import heroFigure from '/src/lib/img/hero-figure.png';
    import heroSig from '/src/lib/img/hero-signature.png';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Milkcee Studios</title>
</svelte:head>

<section class="mc-c-hero">
    <div class="mc-c-hero__block--left"></div>
    <div class="mc-c-hero__block--right"></div>
    <img class="mc-c-hero__img--sig" src={heroSig} alt="Hero section signature" />
    <img class="mc-c-hero__img--figure" src={heroFigure} alt="Hero section figure" />
    <div class="mc-c-hero__explore">
        <p>Explore</p>
        <div class="mc-c-hero__explore__line"></div>
    </div>
</section>

<Navbar />

<div class="mc-l-container">
    <div class="mc-c-title">
        <h2>Featured Work</h2>
        <ArrowLink href="/work" color="art" name="See all" />
    </div>
    <section class="mc-l-timeline">
        {#each Object.keys(data) as idx}
            <TimeBlock 
                id={idx}
                project={data[idx]}
            />
        {/each}
    </section>
    
    <section>
        <div class="mc-c-title">
            <h2>Playground</h2>
            <ArrowLink href="/playground" color="art" name="See all" />
        </div>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    </section>
    
    <section class="mc-c-about">
        <h2>Hello World &#128075;</h2>
        <div class="mc-c-about__blurb">
            <p>Hi, my name is Michaela. I also go by Milkcee on my art accounts.</p>
            <p>I’m a student at University of Southern California majoring in Computer Science and minoring in 3-D Animation. [Insert more good first impression things.]</p>
        </div>
        <div class="mc-c-about__social-links">
            <ArrowLink href="https://github.com/milkcee12" color="tech" name="Github" arrowColor="white" newTab="true" />
            <ArrowLink href="https://instagram.com/milkcee12" color="art" name="Instagram" arrowColor="white" newTab="true" />
            <ArrowLink href="https://twitter.com/milkcee12" color="art" name="Twitter" arrowColor="white" newTab="true" />
        </div>
    </section>
</div>

<Footer />

<style lang="scss">
    .mc-c-hero {
        width: 100%;
        height: 48em;
        overflow-x: hidden;
        display: flex;

        @media (max-width: $breakpoint-lg) { height: 40em; }
        @media (max-width: $breakpoint-md) {
            width: 100%;
            height: 36em;
        }
        &__block {
            flex: 1;
            &--left {
                @extend .mc-c-hero__block;
            }
            &--right {
                @extend .mc-c-hero__block;
                background-color: $color-art;
            }
        }

        &__img {
            position: absolute;
            pointer-events: none;
            &--sig {
                @extend .mc-c-hero__img;
                width: 85em;
                left: calc(50% - 32em);
                top: -10em;

                @media (max-width: $breakpoint-lg) {
                    width: 60em;
                    left: calc(50% - 20em);
                    top: -10em;
                }
                @media (max-width: $breakpoint-md) {
                    width: 40em;
                    left: calc(50% - 15em);
                    top: -2em;
                }
            }
            &--figure {
                @extend .mc-c-hero__img;
                width: 36em;
                height: auto;
                top: 2em;
                left: calc(50% - 15em);

                @media (max-width: $breakpoint-lg) {
                    width: 30em;
                    height: auto;
                    top: 2em;
                    left: calc(50% - 13em);
                }
                @media (max-width: $breakpoint-md) {
                    width: 26em;
                    height: auto;
                    top: 3em;
                    left: calc(50% - 13em);
                }
            }
        }

        // Decorative line on header
        &__explore {
            position: absolute;
            display: flex;
            align-items: center;
            margin-top: 38em;
            transform: rotate(90deg);

            @media (max-width: $breakpoint-lg) { margin-top: 32em; }
            @media (max-width: $breakpoint-md) {
                margin-left: -2em;
                margin-top: 28em;
            }
            p {
                flex-grow: 0;
                padding-right: 1em;
            }

            &__line {
                width: 4em;
                flex-grow: 1;
                height: 3px;
                background-color: $color-tech;
            }
        }
    }

    .mc-c-title {
        display: flex;
        align-items: center;
        h2 {
            flex-grow: 0;
            font-size: 2.2rem;
            padding-right: 1em;
        }
    }

    .mc-l-container {

        @media (max-width: $breakpoint-lg) { margin: 3em 2em 0; }
        section {
            margin-bottom: 8em;
        }
    }

    .mc-l-timeline {
        width: 80%;
        margin-top: 5em;
        margin-left: auto;
        margin-right: auto;

        @media (max-width: $breakpoint-xl) { width: 90%; }
        @media (max-width: $breakpoint-lg) {
            width: 100%;
            margin-top: 1em;
        }
    }

    .mc-c-about {
        &__blurb {
            color: $color-muted;
        }
        &__social-links {
            display: flex;
        }
    }
</style>
