<script>
  import Button from './Button.svelte';
</script>

<div class="md:w-1/3 lg:w-1/2">
  <div class="flex justify-center space-x-3 md:flex-col md:items-center md:space-y-3 lg:flex-row lg:items-center lg:space-y-0">
    <input type="text" placeholder="Updates in your inbox..." class="rounded-full px-4 focus:outline-none md:h-10 md:px-2" />
    <Button>Go</Button>
  </div>
  <div class="hidden text-center text-sm text-white md:block md:pt-6">Copyright &copy; {new Date().getFullYear()}, All Rights Reserved</div>
</div>
