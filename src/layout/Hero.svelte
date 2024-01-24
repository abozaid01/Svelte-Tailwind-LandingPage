<script>
  import src from '../img/illustration-intro.svg';
  import Button from '../components/Button.svelte';
</script>

<section id="hero">
  <div class="container mx-auto mt-10 flex flex-col-reverse items-center px-6 md:flex-row md:justify-between">
    <!-- Left Item -->
    <div class="mb-16 flex flex-col space-y-12 md:w-1/2">
      <h1 class=" max-w-sm text-center text-4xl font-bold md:text-left md:text-5xl">Bring everyone together to build better products</h1>

      <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>

      <div class="flex justify-center md:justify-start">
        <Button>Get Started</Button>
      </div>
    </div>
    <!-- Right Item (Img) -->
    <div class="md:w-1/2">
      <img {src} alt="" />
    </div>
  </div>
</section>
