<script>
  import Image from '$lib/components/Image.svelte'

  let { src, ...others } = $props()
</script>

{#if src}
  <picture>
    {#if src?.sources}
      {#each Object.entries(src.sources) as [format, srcset] (format)}
        <source {srcset} type={`image/${format}`} />
      {/each}
    {/if}

    <Image
      src={src?.img?.src || src}
      width={src?.img?.w}
      height={src?.img?.h}
      sizes="auto"
      {...others}
    />
  </picture>
{/if}

<style lang="scss">
  picture {
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>
