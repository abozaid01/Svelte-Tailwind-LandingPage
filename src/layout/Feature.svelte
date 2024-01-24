<script>
  import ListItem from '../components/ListItem.svelte';
</script>

<section id="features">
  <!-- Flex container -->
  <div class="container mx-auto mt-10 flex flex-col space-y-16 px-4 md:flex-row md:space-y-0">
    <!-- What is different? -->
    <div class="flex flex-col space-y-8 md:w-1/2">
      <h2 class="max-w-md text-center text-4xl font-bold md:text-left">What's different about Manage?</h2>
      <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
    </div>

    <!-- Number List -->
    <div class="flex flex-col space-y-8 md:w-1/2">
      <ListItem>
        <span slot="num">01</span>
        <span slot="heading">Track company-wide progress</span>
        <span slot="paragraph">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.</span>
      </ListItem>
      <ListItem>
        <span slot="num">02</span>
        <span slot="heading">Advanced built-in reports</span>
        <span slot="paragraph">Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</span>
      </ListItem>
      <ListItem>
        <span slot="num">03</span>
        <span slot="heading">Everything you need in one place</span>
        <span slot="paragraph">Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</span>
      </ListItem>
    </div>
  </div>
</section>
