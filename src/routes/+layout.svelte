<slot />

<style lang="scss" global>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
    body {
        overflow: overlay;
        overflow-x: hidden;
        font-family: 'Inter', sans-serif;
        background-color: $dark;
        color: $light;
        padding: 0;
        margin: 0;
    }

    body > div {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    a {
        color: $text-art;
        text-decoration: none;
        font-weight: bold;
    }

    .container {
        flex: 1;
        margin: 8em 3em 0;
    }
</style>