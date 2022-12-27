<script>
    import Navbar from '../lib/components/navbar.svelte';
    import Footer from '../lib/components/footer.svelte';
    import TimelineElem from '../lib/components/timelineElem.svelte';
    import ArrowLink from '../lib/components/arrowLink.svelte';
    import heroFigure from '/src/lib/img/hero-figure.png';
    import heroSig from '/src/lib/img/hero-signature.png';

    /** @type {import('./$types').PageData} */
    export let data;
    let id = 0;
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
    <div class="title">
        <h2>Featured Work</h2>
        <ArrowLink href="/work" color="art" name="See all" />
    </div>
    <section class="timeline">
        {#each Object.keys(data) as idx}
            <TimelineElem 
                id={idx}
                title={data[idx].title}
                date={data[idx].end_yr === null ? 
                    `${data[idx].start_yr} - Present` : 
                    `${data[idx].start_yr === data[idx].end_yr ? 
                        `${data[idx].start_yr}` : 
                        `${data[idx].start_yr} - ${data[idx].end_yr}`}`}
                blurb={data[idx].blurb}
                expandName={data[idx].see_more}
                expandColor={data[idx].project_type.name}
                expandHref={"#"}
                tags={data[idx].tags}
            />
        {/each}
    </section>
    
    <section>
        <h2>Works</h2>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    </section>
    
    <section>
        <h2>Hello World &#128075;</h2>
        <div class="text-muted">
            <p>Hi, my name is Michaela. I also go by Milkcee on my art accounts.</p>
            <p>I’m a student at University of Southern California majoring in Computer Science and minoring in 3-D Animation. [Insert more good first impression things.]</p>
        </div>
        <ArrowLink href="https://github.com/milkcee12" color="tech" name="Github" arrowColor="white" newTab="true" />
        <ArrowLink href="https://instagram.com/milkcee12" color="art" name="Instagram" arrowColor="white" newTab="true" />
        <ArrowLink href="https://twitter.com/milkcee12" color="art" name="Twitter" arrowColor="white" newTab="true" />
    </section>
</div>

<Footer />

<style lang="scss">
    section.hero {
        overflow-x: hidden;
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
                left: calc(50% - 32em);
                top: -10em;
            }
            &.hero-figure {
                width: 36em;
                height: auto;
                top: 2em;
                left: calc(50% - 15em);
            }
        }

        // Decorative line on header
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
            padding-right: 1em;
        }

        .title {
            display: flex;
            align-items: center;
        }
        .title h2 {
            flex-basis: content;
        }

        section {
            padding-bottom: 8em;
        }

    }

    .timeline {
        width: 80%;
        margin-top: 5em;
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 992px) {
        section.hero {
            height: 40em;
            img {
                &.hero-sig {
                    width: 60em;
                    left: calc(50% - 20em);
                    top: -10em;
                }
                &.hero-figure {
                    width: 30em;
                    height: auto;
                    top: 2em;
                    left: calc(50% - 13em);
                }
            }

            .explore {
                margin-top: 32em;
            }
        }

        .container {
            margin: 3em 2em 0;
        }
        .timeline {
            width: 100%;
            margin-top: 1em;
        }
    }

    @media (max-width: 768px) {
        section.hero {
            width: 100%;
            height: 36em;

            img {
                &.hero-sig {
                    width: 40em;
                    left: calc(50% - 15em);
                    top: -2em;
                }
                &.hero-figure {
                    width: 26em;
                    height: auto;
                    top: 3em;
                    left: calc(50% - 13em);
                }
            }

            .explore {
                margin-left: -2em;
                margin-top: 28em;
            }
        }
    }
</style>
