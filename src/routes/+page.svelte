<script>
    import { base } from "$app/paths";
  import Window from "$lib/components/Window.svelte";
</script>

<svelte:head>
    <title>Milkcee Studios</title>
</svelte:head>

<h1>Hello World! This site is currently under construction. To see the old site, click <a href="https://milkcee12.github.io/v1-skim">here</a>.</h1>

<Window title="Window Title" iconUrl="{base}/favicon-32x32.png" doEnableControls={true}>
    <p>This is some content</p>
</Window>

<Window title="Window 2" doEnableControls={true}>
    <p>Here is another window</p>
</Window>

<Window title="No controls">
    <p>Here is another window</p>
</Window>
