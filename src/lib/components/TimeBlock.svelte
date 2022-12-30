<script>
    export let id, title, date, blurb, expandName, expandHref, expandColor, tags;
    import ArrowLink from './ArrowLink.svelte';
</script>

<div class={`mc-c-timeblock --${id % 2 === 0 ? 'even' : 'odd'}`}>
    <div class="mc-c-timeblock__col--content">
        <div class="mc-c-timeblock__col--content__bubble">
            <h3 class="mc-c-timeblock__col--content__bubble_title">{title}</h3>
            <p class="mc-c-timeblock__col--content__bubble_date">{date}</p>
            <p class="mc-c-timeblock__col--content__bubble_blurb">{blurb}</p>
            <ArrowLink color={expandColor} href={expandHref}, name={expandName} />
        </div>
    </div>
    <div class="mc-c-timeblock__vl"></div>
    <div class="mc-c-timeblock__col--tags">
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
    .mc-c-timeblock {
        @mixin timeblock() {
            display: flex;
            @media (max-width: $breakpoint-md) { margin: 0; }
            @media (max-width: $breakpoint-s) { 
                flex-direction: row;
                margin: 0 0 0 0.5em ; 
            }
        }

        &.--even {
            @include timeblock();
            flex-flow: row-reverse;
            @media (max-width: $breakpoint-s) { flex-flow: row; }
        }

        &.--odd {
            @include timeblock();
        }


        // Content within timeblock layout
        @mixin __col() {
            flex: 1;
            padding-bottom: 5em;
            display: flex;
            align-items: center;
            @media (max-width: $breakpoint-s) { justify-content: flex-start; }
        }

        // Bubble content
        &__col--content {
            @include __col();

            @media (max-width: $breakpoint-s) {
                flex: 3;
                font-size: 0.8rem;
                margin-top: 0.3em;
            }
            .--even & {
                justify-content: flex-end;
                // Right time bubble
                &::before {
                    content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
                    align-self: flex-start;
                    margin-top: 2.7em;
                    margin-right: -6px;

                    @media (max-width: $breakpoint-s) {
                        content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
                        align-self: flex-start;
                        margin-top: 2.7em;
                        margin-right: -5px;
                    }
                }
            }

            // Left time bubble
            .--odd & {
                &::after {
                    content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
                    align-self: flex-start;
                    margin-top: 2.7em;
                    margin-left: -6px;
                    @media (max-width: $breakpoint-s) { content: none; }
                }

                &::before {
                    @media (max-width: $breakpoint-s) {
                        content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="27" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cg transform="rotate(-90 128 128)"%3E%3Cpath fill="white" d="M236.8 212a23.9 23.9 0 0 1-20.8 12H40a23.9 23.9 0 0 1-20.7-36l87.9-152a24 24 0 0 1 41.6 0l87.9 152a23.7 23.7 0 0 1 .1 24Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
                        align-self: flex-start;
                        margin-top: 2.7em;
                        margin-right: -5px;
                    }
                }
            }

            &__bubble {
                border: 3px solid $color-light;
                border-radius: 0.8em;
                padding: 1em 2em;
            
                p {
                    color: $color-muted;
                }

                &__date {
                    margin-top: 0.3em;
                }
                &__title {
                    margin-bottom: 0.3em;
                    @media (max-width: $breakpoint-s) { font-size: 1.1rem; }
                }
            }
        }

        // Tags
        &.--even &__col--tags {
            justify-content: flex-end;
        }
        &__col--tags {
            @include __col();
            align-self: center;
            margin-bottom: 6em;

            @media (max-width: $breakpoint-md) { margin-bottom: 7em; }
            @media (max-width: $breakpoint-s) { display: none; }
            ul {
                display: flex;
                flex-flow: column;
                padding: 0;
            }
            li {
                font-size: 1.1rem;
                font-weight: bold;
                list-style: none;
                border-left: 6px solid $color-muted;
                padding: 0.2em 0 0.2em 1.2em;
            }

            .tag-tech {
                border-color: $color-tech;
            }

            .tag-art {
                border-color: $color-art;
            }
        }

        // Centerline of timeline
        &__vl {
            width: 3px;
            background-color: $color-light;
            margin: 0 5em;

            @media (max-width: $breakpoint-lg) { margin: 0 4em; }
            @media (max-width: $breakpoint-md) { margin: 0 3em; }
            @media (max-width: $breakpoint-s) {
                order: -1;
                margin: 0 2em 0 0;
            }
 
            &::before {
                content: '';
                z-index: 10;
                display: block;
                position: relative;
                width: 15px; 
                height: 15px;
                margin-top: 3em;
                background-color: $color-light;
                border: 3px solid $color-art;
                border-radius: 50%;
                right: 0.5em;
            }
        }

        // Makes vl line of first timeblock shorter but still lets all other blocks look connected by a centerline
        &:first-child &__vl {
            margin-top: 3em;
            &::before {
                margin-top: 0;
            }
        }

        // Adds down pointing arrow to vl of last timeblock
        &:last-child &__vl::after {
            content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg transform="rotate(-90 12 12)"%3E%3Cpath fill="white" d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
            position: relative;
            text-align: center;
            right: 1em;
            top: calc(100% - 6.25em);
        }
    }
</style>
