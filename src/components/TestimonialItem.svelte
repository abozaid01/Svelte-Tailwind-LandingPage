<script>
  export let src = '';
  export let hidden = false;
</script>

<div class="{hidden && 'hidden md:flex'} flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:w-1/3">
  <img {src} alt="" />
  <h2><slot name="name" /></h2>
  <p><slot name="paragraph" /></p>
</div>
