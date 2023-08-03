<template>
  <div class="parallax min-h-[calc(100vh-40px)]">
    <article
      class="absolute right-10 top-1/3 inline-block max-w-md rounded border border-gray-300/20 bg-zinc-800/60 p-10 backdrop-brightness-50 backdrop-grayscale"
    >
      <strong class="text-sm">
        Connecting You and Technology with
        <span class="text-[color:var(--color-primary)]">Cat</span>'s Heart
      </strong>
      <h2 class="text-white">Explore a New NFC Experience</h2>
      <p class="mb-5">
        Welcome to NFCAT! We bring you a stable and innovative mobile NFC scanning solution. Join us
        to explore a whole new NFC experience, where you connect with technology through the heart
        of a cat lover.
      </p>

      <a
        href="#start"
        title="Start expoloring"
        class="peer mb-1 inline-block rounded bg-[color:var(--color-primary)] px-3 py-2 font-bold text-zinc-600 transition-colors hover:bg-[color:var(--color-primary-light-1)] hover:text-stone-700"
      >
        Meow
      </a>
      <span class="p-3 text-sm peer-hover:text-white">START the journey.</span>
    </article>
  </div>
</template>

<style scoped lang="postcss">
.parallax {
  background-image: url(../assets/image/dot.svg), url(../assets/image/banner2.webp);
  background-repeat: repeat, no-repeat;
  @apply bg-[size:auto,cover];
  @apply relative bg-fixed bg-center;
}
</style>

<!-- &::before {
  background-image: url(../assets/image/dot.svg);
  @apply content-[''] block absolute w-full h-full left-0 right-0 top-0 bottom-0;
} -->
