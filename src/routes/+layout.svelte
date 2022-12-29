<slot />

<style lang="scss" global>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
    body {
        overflow: overlay;
        overflow-x: clip;
        font-family: 'Inter', sans-serif;
        background-color: $color-dark;
        color: $color-light;
        padding: 0;
        margin: 0;
    }
    body > div {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    a {
        color: $color-art;
        text-decoration: none;
        font-weight: bold;
    }
    .container {
        flex: 1;
        margin: 8em 3em 0;
    }

    @media (max-width: 992px) {
        .container {
            margin: 6em 3em 0;
        }
    }
    @media (max-width: 768px) {
        .container {
            margin: 4em 2em 0;
        }
    }

</style>