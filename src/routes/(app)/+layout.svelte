<script>
    import Navbar from '../../lib/components/Navbar.svelte';
    import Footer from '../../lib/components/Footer.svelte';
</script>

<Navbar />

<div class="mc-l-container">
    <slot></slot>
</div>

<Footer />
