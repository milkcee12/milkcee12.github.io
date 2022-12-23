<script>
    import Navbar from '../navbar.svelte';
    import Footer from '../footer.svelte';
</script>

<Navbar />

<div class="container">
    <slot></slot>
</div>

<Footer />
