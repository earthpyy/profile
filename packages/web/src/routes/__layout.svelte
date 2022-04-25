<script lang="ts">
  import Header from '$lib/header/Header.svelte'
  import '../app.css'
  import { darkMode } from '../app.stores'
  import 'flowbite/dist/flowbite.css'
  import { beforeUpdate } from 'svelte'

  beforeUpdate(() => {
    if ($darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })
</script>

<div class="container mx-auto">
  <header>
    <Header />
  </header>

  <main>
    <slot />
  </main>
</div>
