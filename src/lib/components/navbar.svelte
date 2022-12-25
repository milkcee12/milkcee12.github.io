<nav>
    <a href="/" class="nav-brand"><b>MC</b></a>
    <div class="nav-links">
        <a href="/work">Work</a>
        <a href="/about">About</a>
        <a href="/playground">Playground</a>
    </div>
</nav>

<style lang="scss">
    nav {
        display: flex;
        justify-content: space-between;
        border-bottom: 1.5px solid $light;
        padding: 3.5em 3em;

        .nav-links a {
            padding: 0 1em;
        }

        .nav-brand {
            font-size: 1.5rem;
        }
    }
    a {
        color: $light;
    }
</style>
