<script lang="ts">
  import Social from '$lib/social/Social.svelte'
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <div class="p-12 max-w bg-primary rounded-lg shadow-lg text-white flex flex-row">
    <div class="basis-1/3 px-5">test</div>
    <div class="basis-2/3 px-5 text-center">
      <p class="text-5xl font-semibold">Preeti Yuankrathok</p>
      <p class="mt-3">Software Developer</p>

      <div class="flex flex-row justify-center gap-2 mt-5">
        <Social icon="linkedin" color="#0077B5" href="https://linkedin.com/in/earthpyy" />
        <Social icon="github" color="#171515" href="https://github.com/earthpyy" />
        <Social icon="gitlab" color="#FC6D26" href="https://gitlab.com/earthpyy" />
      </div>
    </div>
  </div>
</section>
