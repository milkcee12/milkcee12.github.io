<svelte:head>
    <title>About | Milkcee Studios</title>
</svelte:head>

<section class="mc-c-title">
    <h1>This site is a love letter to the two things I cherish: <span class="color-art">drawing</span> and <span class="color-tech">programming</span>.</h1>
    <p>Here is a little blurb that talks more about my intended disciplines.</p>
</section>
<section class="mc-c-lists">
    <h2>Fun Lists</h2>
    <p>Art and code isn't all I do, here are some of my favorite things as lists!</p>
</section>

<style lang="scss">
    section {
        margin-bottom: 8em;
    }
    .mc-c-title {
        width: 70%;
        h1 {
            font-size: 2em;
        }
    }

    @media (max-width: 768px) {
        .title {
            width: 100%;
        }
    } 

    @media (max-width: 576px) {
        .title {
            text-align: center;
        }
    }

</style>
