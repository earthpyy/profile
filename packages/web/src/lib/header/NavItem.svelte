<script lang="ts">
  import { page } from '$app/stores'

  export let name: string
  export let pathname: string
</script>

<li>
  <a
    sveltekit:prefetch
    href={pathname}
    class="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    class:text-gray-700={$page.url.pathname !== pathname}
    class:text-primary={$page.url.pathname === pathname}
  >
    {name}
  </a>
</li>
