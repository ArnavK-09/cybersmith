<script>
	// imports
	import Navbar from '$lib/components/Navbar.svelte';

	// global css
	import '../global.css';
</script>

<header>
	<Navbar />
</header>
<main class="pt-14">
	<slot />
</main>
<footer />
