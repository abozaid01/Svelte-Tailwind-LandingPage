<script>
  import TestimonialItem from '../components/TestimonialItem.svelte';
  import Button from '../components/Button.svelte';
  import testimonials from '../data/testimonials.json';
  import { Swipe, SwipeItem } from 'svelte-swipe';

  const swipeConfig = {
    autoplay: true,
    delay: 4000,
    showIndicators: true,
    transitionDuration: 2000,
    defaultIndex: 0,
  };
</script>

<section id="testimonial">
  <!-- Container -->
  <div class="container mx-auto mt-32 flex max-w-7xl flex-col items-center px-5">
    <h2 class="text-center text-4xl font-bold">What they've said</h2>

    <!-- Desktop View -->
    <div class="mt-20 hidden lg:flex lg:space-x-14">
      {#each testimonials as testimonial (testimonial.name)}
        <TestimonialItem>
          <span slot="img"> <img src={testimonial.img} alt="" /> </span>
          <span slot="name">{testimonial.name}</span>
          <span slot="paragraph">{testimonial.details}</span>
        </TestimonialItem>
      {/each}
    </div>

    <!-- Mobile View -->
    <div class="h-[34rem] w-full lg:hidden">
      <Swipe {...swipeConfig}>
        {#each testimonials as testimonial (testimonial.name)}
          <SwipeItem classes="mt-20 flex flex-col">
            <TestimonialItem>
              <span slot="img"> <img src={testimonial.img} alt="" /> </span>
              <span slot="name">{testimonial.name}</span>
              <span slot="paragraph">{testimonial.details}</span>
            </TestimonialItem>
          </SwipeItem>
        {/each}
      </Swipe>
    </div>

    <div class="my-16">
      <Button>Get Started</Button>
    </div>
  </div>
</section>

<style>
  :root {
    --sv-swipe-indicator-active-color: #f25f3a;
  }
</style>
