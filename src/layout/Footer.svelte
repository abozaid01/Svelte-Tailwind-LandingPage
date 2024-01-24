<script>
  import FooterInput from '../components/FooterInput.svelte';
  import FooterLinks from '../components/FooterLinks.svelte';
  import LogoSocialLinks from '../components/LogoSocialLinks.svelte';
</script>

<footer class="bg-veryDarkBlue">
  <div class=" container mx-auto flex flex-col-reverse justify-center space-y-8 space-y-reverse px-6 py-10 md:flex-row md:justify-between md:space-y-0 md:px-2">
    <LogoSocialLinks />
    <FooterLinks />
    <FooterInput />
  </div>
  <div class="pb-4 text-center text-white md:hidden">Copyright &copy; {new Date().getFullYear()}, All Rights Reserved</div>
</footer>
