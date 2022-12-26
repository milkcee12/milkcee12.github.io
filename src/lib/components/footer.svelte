<script>
    import Icon from '@iconify/svelte';

    let date = 'undefined';
    fetch('https://api.github.com/repos/milkcee12/milkcee12.github.io/commits')
        .then(response => response.json())
        .then(commits => {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            var dateISO = new Date(commits[0].commit.committer.date);
            date = dateISO.toLocaleDateString("en-US", options);
        });
</script>

<footer>
    <p class="flex-item">© 2022 All right reserved.</p>
    <div class="foot-icons flex-item">
        <a href="https://www.instagram.com/milkcee12/" target="_blank" rel="noreferrer"><Icon icon="fa6-brands:instagram" width="25" height="25" /></a>
        <a href="https://github.com/milkcee12/" target="_blank" rel="noreferrer"><Icon icon="fa6-brands:github" width="25" height="25" /></a>
        <a href="https://twitter.com/milkcee12" target="_blank" rel="noreferrer"><Icon icon="fa6-brands:twitter" width="25" height="25" /></a>
    </div>
    <p class="updated flex-item">Last updated: <br> {date}</p>
</footer>

<style lang="scss">
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1.5px solid $light;
        padding: 3.5em 4em;
        color: $muted;

        .foot-icons {
            a {
                padding: 0 0.5em;
                color: $light;
                &:hover {
                    color: $muted;
                }
            }
        }
        .updated {
            text-align: right;
        }
    }

    @media (max-width: 992px) {
        footer {
            padding: 3.5em 2em;
        }
    }

    @media (max-width: 768px) {
        footer {
            padding: 2em 2em;
            flex-wrap: wrap;
            .flex-item {
                flex-basis: 100%;
                text-align: center;
                justify-content: center;
            }
        }
    }

</style>
