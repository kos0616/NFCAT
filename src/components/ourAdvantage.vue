<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const REF_CAT = ref<HTMLImageElement | null>(null);

const initParallax = () => {
  const element = REF_CAT.value;
  if (!element) return;
  const { top, height } = element.getBoundingClientRect();
  const position = top + height / 2;
  /** (滾動距離 - 物件位置) / 畫面高度 = 物件位置比例 */
  const scrollY = window.innerHeight - position;

  const MAX = 100;

  if (scrollY > 1 && scrollY < MAX * 5)
    element.style.transform = `translateY(-${scrollY / 5}px) scale(${1 + scrollY / 3000})`;
};

onMounted(() => {
  window.addEventListener('scroll', initParallax);
});
onUnmounted(() => {
  window.removeEventListener('scroll', initParallax);
});
</script>

<template>
  <div class="bg innerShadowY relative overflow-hidden pb-60 pt-20">
    <article class="container mx-auto">
      <div class="mb-10 text-center text-[150%]">
        <strong class="mb-0">Embrace the Power of NFC Technology</strong>
        <h2 class="text-white">
          Discover the <b class="text-[color:var(--color-primary)]">NFCAT</b> Advantage
        </h2>
      </div>

      <ol class="advantage grid grid-cols-3 gap-8">
        <li class="advantage-item">
          <strong class="advantage-title">Seamless NFC Scanning</strong>
          Experience a smooth and hassle-free NFC scanning process with NFCAT. Our cutting-edge
          technology ensures fast and reliable connectivity every time.
        </li>

        <li class="advantage-item">
          <strong class="advantage-title">Customized Solutions</strong>
          We understand that every business is unique. At NFCAT, we offer tailored NFC solutions
          that align perfectly with your specific needs and objectives.
        </li>

        <li class="advantage-item">
          <strong class="advantage-title">Exceptional After-Sales Support</strong>
          Our commitment to your satisfaction doesn't end with a sale. Our dedicated support team is
          always available to assist you with any queries or technical assistance you may require.
        </li>

        <li class="advantage-item">
          <strong class="advantage-title">Real-Time Online Consultation</strong>
          Have questions or need advice? Our online consultation feature connects you directly with
          our experts, providing real-time assistance for a seamless NFC experience.
        </li>

        <li class="advantage-item">
          <strong class="advantage-title">Offline Mode Capability</strong>
          Stay connected even when offline. NFCAT's innovative technology enables you to enjoy NFC
          functionality without an internet connection, ensuring uninterrupted usage.
        </li>

        <li class="advantage-item">
          <strong class="advantage-title">User-Friendly Interface</strong>
          NFCAT boasts an intuitive and user-friendly interface, making it easy for anyone to
          navigate and maximize the benefits of NFC technology.
        </li>
      </ol>
    </article>
    <img
      src="../assets/image/catOpenMouth.webp"
      alt="cat open mouth"
      class="absolute -bottom-[100px] right-4 origin-bottom-right"
      ref="REF_CAT"
    />
  </div>
</template>

<style lang="postcss" scoped>
.bg {
  background-image: url(../assets/image/1506.jpg);
  @apply bg-cover bg-fixed bg-left-top;
}
.advantage {
  .advantage-item {
    @apply rounded border border-stone-600/50 bg-slate-800/25 px-8 py-8 backdrop-blur-sm;
    .advantage-title {
      @apply mb-2 block text-lg text-white;
    }
  }
}
</style>
