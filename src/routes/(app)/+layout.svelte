<script>
    import Navbar from '../../lib/components/navbar.svelte';
    import Footer from '../../lib/components/footer.svelte';
</script>

<Navbar />

<div class="container">
    <slot></slot>
</div>

<Footer />
