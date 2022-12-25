<script>
    import Navbar from '../lib/components/navbar.svelte';
    import Footer from '../lib/components/footer.svelte';
    import TimelineElem from '../lib/components/timelineElem.svelte';
    import heroFigure from '/src/lib/img/hero-figure.png';
    import heroSig from '/src/lib/img/hero-signature.png';

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
    <h2>Featured Work</h2>
    <section class="timeline">
        <TimelineElem 
            id={++id}
            title={"Milkcee Studios"}
            date={"2022"}
            blurb={"Designed my portfolio website. Implemented using SvelteKit and MySQL."}
            expand={"View the creation process"}
            expandHref={"#"}
            tags={[
                {name: 'Front-End', type: 'tech'},
                {name: 'Back-End', type: 'tech'},
                {name: 'UI/UX', type: 'art'}
            ]}
        />

        <TimelineElem 
            id={++id}
            title={"Trojan Dining"}
            date={"2021 - Present"}
            blurb={"Student-first redesign of the USC Residential Dining Menu website. Implemented using React.js."}
            expand={"View case study"}
            expandHref={"#"}
            tags={[
                {name: 'Front-End', type: 'tech'},
                {name: 'UI/UX', type: 'art'}
            ]}
        />
    </section>
    
    <section>
        <h2>Works</h2>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    </section>
    
    <section>
        <h2>Hello World &#128075;</h2>
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

    .timeline {
        width: 80%;
        margin-top: 5em;
        margin-left: auto;
        margin-right: auto;
    }
</style>
