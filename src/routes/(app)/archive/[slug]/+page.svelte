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
  <p><i>{data.date}</i></p>
  <h2>{data.title}</h2>
  <Tags tags={data.tags} />
</div>

<svelte:component this={data.content} />

<p class="footer">&lt; <a href="/archive">Back to archive</a></p>

<style lang="scss">
  .title {
    margin: 4em 0 1em;
    h2 {
      margin-top: 0em;
      margin-bottom: 0.3em;
    }

    p {
      margin-bottom: 0.5em;
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

  .breadcrumbs a, .footer a {
    text-decoration: none;
  }

  .footer {
    margin-top: 6em;
  }
</style>
