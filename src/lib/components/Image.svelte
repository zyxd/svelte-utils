<script>
  let { loading = 'lazy', ...others } = $props()

  let node = $state()
  let loaded = $state(false)

  $effect(() => node.addEventListener('load', () => (loaded = true), { once: true }))
</script>

<img bind:this={node} class:loaded class="noscript-visible" {loading} {...others} />

<noscript>
  <style>
    .noscript-visible {
      opacity: 1 !important;
    }
  </style>
</noscript>

<style lang="scss">
  img {
    display: block;
    max-width: 100%;
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: top center;
    transition: opacity 0.4s ease;
    opacity: 0;

    &.loaded {
      opacity: 1;
    }
  }
</style>
