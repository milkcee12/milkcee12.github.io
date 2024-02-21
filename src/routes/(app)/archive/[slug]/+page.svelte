<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data: any;
</script>

<svelte:head>
  <title>{data.title} | Milkcee Studios</title>
</svelte:head>

<p>
  <a href="/archive">Archive</a> &gt;
  <a href="/archive/{data.slug}">{data.title}</a>
</p>

<h2 class="title">{data.title}</h2>
<p>{data.date}</p>

<svelte:component this={data.content}/>

<style lang="scss">
    .title {
        margin-bottom: 0;
    }
</style>
