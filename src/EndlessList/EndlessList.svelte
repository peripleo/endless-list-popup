<script>
  import { onMount } from 'svelte';

  export let data;
  export let padding;

  let container;

  // Intersection observer callback
  const callback = entries => entries.forEach(entry => {
    const { style } = entry.target;
    const ratio = entry.intersectionRatio;

    if (entry.isIntersecting) {
      style.opacity = Math.pow(ratio, 2);
      // style.zIndex = Math.round(ratio * 10);

      // const isAbove = entry.boundingClientRect.y < entry.rootBounds.y;
      // const offset = isAbove ? yOffset(r) : -yOffset(r);

      // style.transform = `scale(${interpolate(ratio)})`; // translateY(${offset}px)`;
    } else {
      style.opacity = 0;
    }
  });

  onMount(() => {
    const options = {
      root: container,
      rootMargin: '0px',
      threshold: Array.from({ length: 51 }, (v, i) => i * 0.02)
    }

    var observer = new IntersectionObserver(callback, options);

    container.childNodes.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  });
</script>

<div 
  class={$$restProps.class ? `endless-list-container ${$$restProps.class}` : 'endless-list-container'}
  style={`padding: ${padding ? padding.map(n => `${n}px`).join(' ') : '0'}`}
  bind:this={container}>
  {#each data as item, idx}
    <div class="endless-list-item">
      <slot item={item} idx={idx} />
    </div>
  {/each}
</div>

<style>
  .endless-list-container {
    overflow-y: scroll;
    position: relative;
    /* Firefox */
    scrollbar-width: none;  
    /* Internet Explorer 10+ */
    -ms-overflow-style: none;  
  } 

  .endless-list-container::-webkit-scrollbar { 
    /* Safari and Chrome */
    display: none; 
  }
</style>