<script setup lang="ts">
import { RouterView } from 'vue-router';
import initNetworkStatus from './API/initNetworkStatus';
initNetworkStatus();
</script>

<template>
  <header class="sticky top-0 z-20 bg-[color:var(--color-header)]">
    <div class="container mx-auto flex">
      <h1 class="brand mr-auto text-white">NFCAT</h1>
      <nav>
        <a href="#home" class="home-nav-link">Home</a>
        <a href="#about" class="home-nav-link">About</a>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="postcss">
.brand {
  @apply tracking-wide first-letter:text-xl first-letter:font-bold first-letter:text-[color:var(--color-primary)];
}

.home-nav-link {
  @apply mx-1 p-1;

  &:hover {
    @apply text-gray-400 transition-colors duration-300 dark:text-white;
  }
  &.router-link-exact-active {
    @apply text-[color:var(--color-primary)];
  }
}
</style>
