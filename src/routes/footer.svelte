<script>
    import Icon from '@iconify/svelte';

    let dateStr;
    getLatestCommit();
    async function getLatestCommit() {
        const res = await fetch('https://api.github.com/repos/milkcee12/milkcee12.github.io/commits');
        let commits = await res.json();
        let date = new Date(commits[0].commit.committer.date);
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateStr = date.toLocaleDateString("en-US", options);
    }
</script>

<footer>
    <p>© 2022 All right reserved.</p>
    <div class="foot-icons">
        <a href="https://www.instagram.com/milkcee12/" target="_blank" rel="noreferrer"><Icon icon="fa6-brands:instagram" width="25" height="25" /></a>
        <a href="https://github.com/milkcee12/" target="_blank" rel="noreferrer"><Icon icon="fa6-brands:github" width="25" height="25" /></a>
        <a href="https://twitter.com/milkcee12" target="_blank" rel="noreferrer"><Icon icon="fa6-brands:twitter" width="25" height="25" /></a>
    </div>
    <p class="updated">Last updated: <br> {dateStr}</p>
</footer>

<style lang="scss">
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 2px solid $light;
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
</style>
