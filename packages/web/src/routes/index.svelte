<script lang="ts">
  import Social from '$lib/social/Social.svelte'
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section class="tight-container">
  <div class="p-12 max-w bg-primary rounded-t-xl shadow-lg text-white flex flex-row">
    <div class="basis-1/3">pic</div>
    <div class="basis-2/3 text-center">
      <p class="text-5xl font-semibold">Preeti Yuankrathok</p>
      <p class="mt-3 font-semibold">Software Developer</p>

      <div class="flex flex-row justify-center gap-2 mt-5">
        <Social icon="linkedin" alt="LinkedIn" color="#0077B5" href="https://linkedin.com/in/earthpyy" />
        <Social icon="github" alt="GitHub" color="#171515" href="https://github.com/earthpyy" />
        <Social icon="gitlab" alt="GitLab" color="#DB3B21" href="https://gitlab.com/earthpyy" />
        <Social
          icon="stack-overflow"
          alt="Stack Overflow"
          color="#F47F24"
          href="https://stackoverflow.com/users/7930117/preeti-y"
        />
      </div>
    </div>
  </div>

  <div class="p-12 max-w bg-white rounded-b-xl shadow-lg flex flex-row">
    <div class="basis-1/2">1</div>
    <div class="basis-1/2">2</div>
  </div>
</section>
