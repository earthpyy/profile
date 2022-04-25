<script lang="ts">
  import Header from '$lib/header/Header.svelte'
  import '../app.css'
  import 'flowbite/dist/flowbite.css'
</script>

<header>
  <Header />
</header>

<main>
  <slot />
</main>
