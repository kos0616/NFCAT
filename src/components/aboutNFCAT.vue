<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const REF_MOBILE = ref<HTMLImageElement | null>(null);

const observer = new IntersectionObserver(
  ([entry]) => entry.target.classList.toggle('-translate-x-2/3', entry.intersectionRatio > 0.2),
  { threshold: [0.2] }
);

const initParallax = (isInit = true) => {
  const element = REF_MOBILE.value;
  if (!element) return;
  if (isInit === true) {
    observer.observe(element);
  } else {
    console.log('un');

    observer.unobserve(element);
  }
};

onMounted(() => {
  initParallax();
});

onUnmounted(() => {
  initParallax(false);
});
</script>

<template>
  <div
    class="bg relative flex aspect-[4/3] items-center overflow-hidden py-10 landscape:aspect-auto"
  >
    <img
      ref="REF_MOBILE"
      src="../assets/image/mobile.webp"
      alt="smart phone"
      width="250"
      height="506"
      class="absolute -right-[100px] top-1/2 -translate-y-1/2 rotate-12 transition-transform duration-1000 ease-in xl:right-0"
    />
    <article
      class="mx-auto max-w-md rounded border border-stone-400/50 p-10 backdrop-blur-sm backdrop-brightness-50 backdrop-grayscale-[50%] xl:px-20"
    >
      <table class="mb-10 text-[150%] drop-shadow">
        <caption class="text-left">
          <h2 class="py-5 leading-8"><small>what's</small> NFCAT?</h2>
        </caption>
        <tbody>
          <tr>
            <th class="pb-1 pr-3 font-serif text-5xl text-[color:var(--color-primary)]">N</th>
            <td>Near</td>
          </tr>
          <tr>
            <th class="pb-1 pr-3 font-serif text-5xl text-[color:var(--color-primary)]">F</th>
            <td>Field</td>
          </tr>
          <tr>
            <th class="pb-1 pr-3 font-serif text-5xl text-[color:var(--color-primary)]">C</th>
            <td>Communication</td>
          </tr>
          <tr>
            <th class="pb-1 pr-3 font-serif text-5xl text-[color:var(--color-primary)]">A</th>
            <td>Advanced</td>
          </tr>
          <tr>
            <th class="pb-1 pr-3 font-serif text-5xl text-[color:var(--color-primary)]">T</th>
            <td>Technology</td>
          </tr>
        </tbody>
      </table>

      <p class="text-center">
        Unleash the Full Potential of NFC Technology with NFCAT. Empower your Business Today!
      </p>
    </article>
  </div>
</template>

<style lang="postcss" scoped>
.bg {
  background-image: url(../assets/image/intro.webp);
  @apply bg-black bg-contain bg-left-top bg-no-repeat portrait:bg-cover;
}
</style>
