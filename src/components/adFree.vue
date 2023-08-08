<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const REF_CAT = ref<HTMLImageElement | null>(null);

const initParallax = () => {
  const element = REF_CAT.value;
  if (!element) return;
  const { top } = element.getBoundingClientRect();
  const position = top;
  /** (滾動距離 - 物件位置) / 畫面高度 = 物件位置比例 */
  const scrollY = window.innerHeight - position;
  const isSmall = window.innerWidth < 1024;
  if (scrollY > 1 && !isSmall) element.style.transform = `translateY(-${scrollY / 1.5}px)`;
  if (scrollY > 1 && isSmall) element.style.transform = `translateY(-${scrollY / 10}px)`;
};

onMounted(() => {
  window.addEventListener('scroll', initParallax);
});
onUnmounted(() => {
  window.removeEventListener('scroll', initParallax);
});
</script>

<template>
  <div class="fabric innerShadowY relative overflow-hidden py-24 text-white">
    <div class="container mx-auto">
      <img
        ref="REF_CAT"
        src="../assets/image/seeingCat.webp"
        alt="a cat is seeing U"
        width="400"
        height="768"
        class="absolute right-0 top-12 w-40 md:top-full md:w-96 xl:w-[40%]"
      />
      <article
        class="mx-auto max-w-xl rounded-lg border border-zinc-500 bg-zinc-700/50 px-8 py-10 shadow-xl backdrop-blur-sm"
      >
        <strong>Pure NFC Experience</strong>
        <h2 class="drop-shadow">Embrace a Seamless NFC Experience, Ad-Free</h2>
        <p class="drop-shadow">
          Discover NFCAT, your gateway to a truly ad-free NFC experience. We believe in providing
          you with a seamless and uninterrupted journey into the world of NFC technology, free from
          distractions.
        </p>
      </article>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.fabric {
  background-image: url(../assets/image/fabric.webp);
}
</style>
