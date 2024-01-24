<script>
  export let bgColor = 'bg-brightRed';
  export let color = 'white';
  export let hover = 'hover:bg-brightRedLight';
  export let hidden = false;
</script>

<button class={`${hidden && 'hidden md:block'} rounded-full shadow-xl ${bgColor} px-6 py-3 text-${color} transition-colors duration-300 ${hover} focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-2 disabled:cursor-not-allowed`}>
  <slot />
</button>
