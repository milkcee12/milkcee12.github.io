<script>
    export let id, title, date, blurb, expandName, expandHref, expandColor, tags;
    // console.log(tags);
    import ArrowLink from './arrowLink.svelte';
</script>

<div class={`block ${id % 2 === 0 ? 'even' : 'odd'}`}>
    <div class="col col-content">
        <div class="content">
            <h3 class="title">{title}</h3>
            <p class="date">{date}</p>
            <p class="blurb">{blurb}</p>
            <ArrowLink color={`text-${expandColor}`} href={expandHref}, name={expandName} />
        </div>
    </div>
    <div class="vl"></div>
    <div class="col col-tags">
        <div class="tags">
            <ul>
                {#each tags as tag}
                    <li class={`tag-${tag.tags.type.name}`}>{tag.tags.name}</li>
                {/each}
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
            margin-top: 3em;
            background-color: $light;
            border: 3px solid $text-art;
            border-radius: 50%;
            right: 0.5em;
        }

        &:first-child .vl {
            margin-top: 3em;
            &::before {
                margin-top: 0;
            }
        }

        // Bottom arrow
        &:last-child .vl::after {
            content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="white" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
            position: relative;
            text-align: center;
            right: 1em;
            top: calc(100% - 6.25em);
        }

        // Content left pointing arrow
        &.even {
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
        &.odd {
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
        }

        .content {
            border: 3px solid $light;
            border-radius: 0.8em;
            padding: 1em 2em;
            
            p {
                color: $muted;
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

    @media (max-width: 992px) {
        .block {
            .vl {
                margin: 0 3em;
            }
            .tags {
                margin-bottom: 6em;
                li {
                    font-size: 0.9rem;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .block {
            margin: 0;
            .vl {
                order: -1;
                margin: 0 3em 0;
            }

            &.odd, &.even {
                flex-direction: row;
                .col {
                    justify-content: flex-start;
                }
            }

            &.odd .col.col-content::after {
                content: none;
            }
            &.odd .col.col-content::before, &.even .col.col-content::before {
                content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
                align-self: flex-start;
                margin-top: 2.7em;
                margin-right: -5px;
            }

            .col-content {
                flex: 3;
                font-size: 0.8rem;
                margin-top: 0.3em;
                .title {
                    font-size: 1.1rem;
                }
            }
            .col-tags {
                display: none;
            }

            .vl {
                margin-left: 0;
                margin-right: 1.5em;
            }
        }
    }

</style>
