<script>
    import Navbar from '../lib/components/navbar.svelte';
    import Footer from '../lib/components/footer.svelte';
    import heroFigure from '/src/lib/img/hero-figure.png';
    import heroSig from '/src/lib/img/hero-signature.png';
    import Icon from '@iconify/svelte';
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
        <div class="block">

            <div class="col flex-end">
                <div class="tags">
                    <ul>
                        <li class="tag-tech">Front-End</li>
                        <li class="tag-tech">Back-End</li>
                        <li class="tag-art">UI/UX</li>
                    </ul>
                </div>
            </div>

            <div class="vl"></div>

            <div class="col left-arrow">
                <div class="content">
                    <h3 class="title">Milkcee Studios</h3>
                    <p class="date">2022</p>
                    <p class="blurb">Designed my portfolio website. Implemented using SvelteKit and MySQL.</p>
                    <p class="expand"><a href="#">View the creation process <Icon icon="radix-icons:triangle-right" /></a></p>
                </div>
            </div>

        </div>

        <div class="block">

            <div class="col right-arrow">
                <div class="content">
                    <h3 class="title">Trojan Dining</h3>
                    <p class="date">2021 - Present</p>
                    <p class="blurb">Student-first redesign of the USC Residential Dining Menu website. Implemented using React.js.</p>
                    <p class="expand"><a class="text-tech" href="#">View the creation process <Icon icon="radix-icons:triangle-right" /></a></p>
                </div>
            </div>

            <div class="vl"></div>

            <div class="col">
                <div class="tags">
                    <ul>
                        <li class="tag-tech">Front-End</li>
                        <li class="tag-art">UI/UX</li>
                    </ul>
                </div>
            </div>

        </div>
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
        .block {
            display: flex;

            // Timeline circle
            &:after {
                content: '';
                position: absolute;
                width: 15px;
                height: 15px;
                background-color: $light;
                border: 3px solid $text-art;
                border-radius: 50%;
                margin-top: 3em;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
            }

            &:first-child .vl {
                margin-top: 3em;
            }

            &:last-child .vl::after {
                content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="white" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
                position: relative;
                text-align: center;
                right: 1em;
                top: calc(100% - 2em);
            }

            .col {
                flex: 1;
                padding-bottom: 5em;
                display: flex;
                align-items: center;
                &.flex-end {
                    justify-content: flex-end;
                }

                &.left-arrow {
                    &:before {
                        content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
                        align-self: flex-start;
                        margin-top: 2.7em;
                        margin-right: -6px;
                    }
                }

                &.right-arrow {
                    &:after {
                        content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
                        align-self: flex-start;
                        margin-top: 2.7em;
                        margin-left: -6px;
                    }
                }
            }
            .title {
                font-size: 1.5rem;
            }

            .content {
                border: 3px solid $light;
                border-radius: 0.8em;
                padding: 1em 2em;
                
                p {
                    color: $muted;
                }

                a {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                }

                
            }

            .tags {
                
                display: flex;
                align-self: center;
                margin-bottom: 8em;

                ul {
                    display: flex;
                    flex-flow: column;
                    padding: 0;
                }
                li {
                    font-size: 1.1rem;
                    font-weight: bold;
                    list-style: none;
                    border-left: 6px solid $muted;
                    padding: 0.2em 0 0.2em 1.2em;
                }

                .tag-tech {
                    border-color: $text-tech;
                }

                .tag-art {
                    border-color: $text-art;
                }
            }

            .vl {
                width: 3px;
                background-color: $light;
                margin: 0 5em;
            }
        }
    }
</style>
