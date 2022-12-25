<script>
    export let id, title, date, blurb, expand, expandHref, tags;
    import Icon from '@iconify/svelte';
</script>

<div class="block {id % 2 === 0 ? 'even' : 'odd'}">
    <div class="col col-content">
        <div class="content">
            <h3 class="title">{title}</h3>
            <p class="date">{date}</p>
            <p class="blurb">{blurb}</p>
            <p class="expand"><a href={expandHref}>{expand} <Icon icon="radix-icons:triangle-right" /></a></p>
        </div>
    </div>

    <div class="vl"></div>

    <div class="col">
        <div class="tags">
            <ul>
                {#each tags as tag}
                    <li class={`tag-${tag.type}`}>{tag.name}</li>
                {/each}
                <!-- <li class="tag-tech">Front-End</li>
                <li class="tag-tech">Back-End</li>
                <li class="tag-art">UI/UX</li> -->
            </ul>
        </div>
    </div>
</div>

<style lang="scss">
    .block {
        display: flex;

        // Timeline circle
        .vl::before {
            content: '';
            z-index: 10;
            display: block;
            position: relative;
            width: 15px;
            height: 15px;
            background-color: $light;
            border: 3px solid $text-art;
            border-radius: 50%;
            right: 0.5em;
        }

        &:first-child .vl {
            margin-top: 3em;
        }

        // Bottom arrow
        &:last-child .vl::after {
            content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="white" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
            position: relative;
            text-align: center;
            right: 1em;
            top: calc(100% - 3.25em);
        }

        // Content left pointing arrow
        &.odd {
            flex-flow: row-reverse;
            .col {
                justify-content: flex-end;
                &.col-content::before {
                    content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
                    align-self: flex-start;
                    margin-top: 2.7em;
                    margin-right: -6px;
                }
            }
        }

        // Content right-pointing arrow
        &.even {
            .col.col-content::after {
                content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
                align-self: flex-start;
                margin-top: 2.7em;
                margin-left: -6px;
            }
        }

        .col {
            flex: 1;
            padding-bottom: 5em;
            display: flex;
            align-items: center;
            width: 100%;
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
</style>
