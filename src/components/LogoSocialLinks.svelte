<script>
  import logo from '../img/logo-white.svg';
  import FacebookIcon from '../img/icon-facebook.svelte';
  import InstagramIcon from '../img/icon-instagram.svelte';
  import TwitterIcon from '../img/icon-twitter.svelte';
  import PinterestIcon from '../img/icon-pinterest.svelte';
  import YoutubeIcon from '../img/icon-youtube.svelte';

  const icons = [FacebookIcon, InstagramIcon, TwitterIcon, PinterestIcon, YoutubeIcon];
</script>

<div class="flex flex-col-reverse items-center justify-between space-y-12 space-y-reverse md:w-1/3 md:flex-col">
  <div>
    <img src={logo} alt="" class="bg-gre h-8 md:h-6" />
  </div>
  <div class="flex space-x-8 md:space-x-5">
    {#each icons as Icon (Icon)}
      <a href={'#'}>
        <Icon />
      </a>
    {/each}
  </div>
</div>
