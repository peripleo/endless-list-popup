<script>
  import { onMount } from 'svelte';

  export let data;

  let container;

  // Intersection observer callback
  const callback = entries => entries.forEach(entry => {
    const { style } = entry.target;
    const ratio = entry.intersectionRatio;

    if (entry.isIntersecting) {
      style.opacity = Math.pow(ratio, 2);
      style.zIndex = Math.round(ratio * 10);

      // const isAbove = entry.boundingClientRect.y < entry.rootBounds.y;
      // const offset = isAbove ? yOffset(r) : -yOffset(r);

      // style.transform = `scale(${interpolate(ratio)})`; // translateY(${offset}px)`;
    } else {
      style.opacity = 0;
    }
  });

  const options = {
    root: document.querySelector('.container'),
    rootMargin: '0px',
    threshold: Array.from({ length: 51 }, (v, i) => i * 0.02)
  }

  onMount(() => {
    var observer = new IntersectionObserver(callback, options);

    container.childNodes.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  });
</script>

<div class="endless-list-container" bind:this={container}>
  {#each data as item, idx}
    <div class="endless-list-item">
      <slot item={item} idx={idx} />
    </div>
  {/each}
</div>