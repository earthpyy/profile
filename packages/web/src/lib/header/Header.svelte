<script lang="ts">
  import { darkMode } from '../../app.stores'
  import NavItem from './NavItem.svelte'

  let menuOpened = false

  function toggleDarkMode(): void {
    darkMode.update((value) => !value)
  }
</script>

<nav class="px-2 sm:px-4 py-2.5">
  <div class="flex flex-wrap justify-end items-center">
    <button
      class="p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      on:click={() => (menuOpened = !menuOpened)}
    >
      <i class="fas fa-xl fa-bars" />
    </button>

    <div class="w-full md:block md:w-auto md:mr-4" class:hidden={!menuOpened}>
      <ul class="flex flex-col mt-4 md:flex-row md:items-center md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <NavItem name="Home" pathname="/" />
        <NavItem name="Resume" pathname="/resume" />
        <NavItem name="Contact" pathname="/contact" />
      </ul>
    </div>

    <button
      class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 order-first md:order-last"
      on:click={toggleDarkMode}
    >
      {#if $darkMode}
        <span><i class="fas fa-moon" /></span>
      {:else}
        <span><i class="fas fa-sun" /></span>
      {/if}
    </button>
  </div>
</nav>
