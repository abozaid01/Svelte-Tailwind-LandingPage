<div class="flex flex-col space-y-5">
  <div class="flex items-center space-x-2 rounded-l-full bg-brightRedSupLight md:bg-transparent">
    <p class="rounded-full bg-brightRed px-4 py-2 text-white md:py-1"><slot name="num" /></p>
    <h3 class="text-base font-bold md:text-lg"><slot name="heading" /></h3>
  </div>

  <div>
    <p class="text-darkGrayishBlue"><slot name="paragraph" /></p>
  </div>
</div>
