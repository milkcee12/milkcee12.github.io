<script lang="ts">
  import Tags from "$lib/components/common/Tags.svelte";

  /** @type {import('./$types').PageData} */
  export let data: any;
</script>

<svelte:head>
  <title>{data.title} | Milkcee Studios</title>
</svelte:head>

<p class="breadcrumbs">
  <a href="/archive">Archive</a> &gt;
  <a href="/archive/{data.slug}">{data.title}</a>
</p>

<div class="title">
  <h2>{data.title}</h2>
  <Tags tags={data.tags} />
  <p><i>{data.type}</i></p>
  <p><i>{data.date}</i></p>
</div>

<svelte:component this={data.content} />

<p class="footer">&lt; <a href="/archive">Back to archive</a></p>

<style lang="scss">
  .title {
    margin: 4em 0 2em;
    h2 {
      margin-top: 0em;
      margin-bottom: 0.2em;
    }

    p {
      margin: 0.3em;
    }
  }

  .footer {
    text-align: center;
  }

  .breadcrumbs a,
  .footer {
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.6;
    }
  }

  .breadcrumbs a,
  .footer a {
    text-decoration: none;
  }

  .footer {
    margin-top: 6em;
  }
</style>
