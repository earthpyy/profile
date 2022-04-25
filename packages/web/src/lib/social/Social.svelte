<script lang="ts">
  export let icon: string
  export let color: string
  export let href: string
</script>

<a
  {href}
  target="_blank"
  class="bg-white text-gray-500 hoverable rounded-full cursor-pointer px-2 py-1"
  style:--hover-color={color}
>
  <i class="fab fa-{icon} fa-lg" />
</a>

<style>
  .hoverable:hover {
    color: var(--hover-color);
  }
</style>
