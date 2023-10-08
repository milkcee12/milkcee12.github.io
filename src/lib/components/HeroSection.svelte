<section id="hero">
    <div class="left"></div>
    <div class="right"></div>
</section>

<style lang="scss">
    #hero {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 100vh;
        width: 100%;
        margin-bottom: 0;

        .left {
            grid-column-start: 1;
            justify-self: stretch;
            background-color: $off-black;
        }
        .right {
            grid-column-start: 2;
            justify-self: stretch;
            background-color: $green;
        }
    }
</style>
