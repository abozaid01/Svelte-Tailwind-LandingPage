<script>
  import src from '../img/logo.svg';
  import Button from '../components/Button.svelte';
  import HamburgerIcon from '../components/HamburgerIcon.svelte';
  import MobileMenu from '../components/MobileMenu.svelte';
  import XIcon from '../components/XIcon.svelte';

  let clicked = false;

  const handleClick = () => {
    clicked = !clicked;
  };
</script>

<nav class="container relative mx-auto p-6">
  <div class="flex items-center justify-between">
    <img {src} alt="" />
    <div class="hidden space-x-6 md:flex">
      <a href={'#'} class="hover:text-darkGrayishBlue">Pricing</a>
      <a href={'#'} class="hover:text-darkGrayishBlue">Product</a>
      <a href={'#'} class="hover:text-darkGrayishBlue">About Us</a>
      <a href={'#'} class="hover:text-darkGrayishBlue">Career</a>
      <a href={'#'} class="hover:text-darkGrayishBlue">Community</a>
    </div>

    <Button hidden={true}>Get Started</Button>
    {#if !clicked}
      <HamburgerIcon on:click={handleClick} />
    {:else}
      <XIcon on:click={handleClick} />
    {/if}
  </div>

  {#if clicked}
    <MobileMenu />
  {/if}
</nav>
