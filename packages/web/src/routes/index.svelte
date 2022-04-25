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
</section>
