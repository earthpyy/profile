<script lang="ts">
  import { page } from '$app/stores'
  import { darkMode } from '../../app.stores'

  let menuOpened = false

  function toggleDarkMode(): void {
    darkMode.update((value) => !value)
  }
</script>

<nav class="border-gray-200 px-2 sm:px-4 py-2.5 md:rounded dark:bg-gray-800">
  <div class="flex flex-wrap justify-end items-center">
    <button
      class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      on:click={() => (menuOpened = !menuOpened)}
    >
      <i class="fas fa-xl fa-bars" />
    </button>
    <div class="w-full md:block md:w-auto" class:hidden={!menuOpened}>
      <ul class="flex flex-col mt-4 md:flex-row md:items-center md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <a
            href="#"
            class="block py-2 pr-4 pl-3 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0 dark:text-white"
            aria-current="page">Home</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Services</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Pricing</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Contact</a
          >
        </li>
        <li>
          <button
            type="button"
            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            on:click={toggleDarkMode}
          >
            {#if $darkMode}
              <span><i class="fas fa-moon" /></span>
            {:else}
              <span><i class="fas fa-sun" /></span>
            {/if}
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
