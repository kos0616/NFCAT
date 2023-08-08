<script setup lang="ts">
import { RouterView } from 'vue-router';
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
<!-- 
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
