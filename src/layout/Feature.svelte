<script>
  import ListItem from '../components/ListItem.svelte';
  import features from '../data/features.json';
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
      {#each features as feature (feature.id)}
        <ListItem>
          <span slot="num">{feature.id}</span>
          <span slot="heading">{feature.title}</span>
          <span slot="paragraph">{feature.details}</span>
        </ListItem>
      {/each}
    </div>
  </div>
</section>
