<template>
  <div class="container mx-auto">
    <article id="about" class="sm:grid grid-cols-2 py-5">
      <div class="relative h-48">
        <div class="absolute left-1/2 -translate-x-1/2 -rotate-[30deg]">
          <div class="photo">
            <img
              src="../assets/image/about-2.webp"
              alt="people meetings 1"
              width="200"
              height="135"
            />
          </div>
        </div>
        <div class="absolute left-1/4 -translate-x-1/3 -rotate-12">
          <div class="photo">
            <img
              src="../assets/image/about-1.webp"
              alt="people meetings 2"
              width="200"
              height="135"
            />
          </div>
        </div>
      </div>
      <div class="py-5">
        <h2>Our Story</h2>
        <p>
          At NFCAT, we believe that technology and life can blend seamlessly, offering you the
          convenience of seamless connections. Our team of tech enthusiasts is dedicated to
          providing you with an efficient and stable mobile NFC scanning solution, bringing you
          unprecedented convenience.
        </p>
      </div>
    </article>
  </div>
</template>

<style scoped lang="postcss">
.photo {
  @apply relative inline-block border border-zinc-400 bg-zinc-200 p-5 shadow;

  &::before {
    box-shadow:
      inset 0 -2px 10px 0px rgba(0, 0, 0, 0.6),
      0px 0px 0px 2px #33333333;

    @apply absolute bottom-5 left-5 right-5 top-5 block content-[''];
  }

  img {
    box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.6);
  }
}
</style>
