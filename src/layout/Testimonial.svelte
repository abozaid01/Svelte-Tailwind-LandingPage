<script>
  import TestimonialItem from '../components/TestimonialItem.svelte';
  import src1 from '../img/avatar-anisha.png';
  import src2 from '../img/avatar-ali.png';
  import src3 from '../img/avatar-richard.png';
  import Button from '../components/Button.svelte';
</script>

<section id="testimonial">
  <!-- Container -->
  <div class="container mx-auto mt-32 flex max-w-6xl flex-col items-center px-5">
    <h2 class="text-center text-4xl font-bold">What they've said</h2>

    <div class="mt-24 flex flex-col md:flex-row md:space-x-6">
      <TestimonialItem src={src1} hidden={true}>
        <span slot="name">Anisha Li</span>
        <span slot="paragraph">“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</span>
      </TestimonialItem>
      <TestimonialItem src={src2}>
        <span slot="name">Ali Bravo</span>
        <span slot="paragraph">“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</span>
      </TestimonialItem>
      <TestimonialItem src={src3} hidden={true}>
        <span slot="name">Richard Watts</span>
        <span slot="paragraph">“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</span>
      </TestimonialItem>
    </div>

    <div class="my-16">
      <Button>Get Started</Button>
    </div>
  </div>
</section>
