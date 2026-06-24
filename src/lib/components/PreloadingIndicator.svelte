<script>
  let { color = 'rgb(255, 255, 255)' } = $props()
</script>

<div class="overlay"></div>
<div class="progress" style:background-color={color}></div>

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    inset: 0;
    z-index: 9998;
    cursor: wait;
    pointer-events: auto;
    contain: strict;
  }

  .progress {
    position: fixed;
    left: 0;
    top: 0;
    height: 2px;
    z-index: 9999;
    pointer-events: none;
    width: 100%;
    transform-origin: left top;
    transform: scaleX(0);
    will-change: transform;
    animation: shiftWidth 12s cubic-bezier(0.08, 0.82, 0.17, 1) forwards;
    contain: strict;
  }

  @keyframes shiftWidth {
    from {
      transform: scaleX(0);
    }

    to {
      transform: scaleX(0.9);
    }
  }
</style>
