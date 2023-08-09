<script setup lang="ts">
import banner from '../components/homeBanner.vue';
import staff from '../components/staffIntro.vue';
import about from '../components/aboutUs.vue';
import contact from '../components/contactUs.vue';
import myFooter from '../components/myFooter.vue';
import ADFree from '../components/adFree.vue';
import nfcat from '../components/aboutNFCAT.vue';
import advantage from '../components/ourAdvantage.vue';
import example from '../components/NFCExample.vue';
</script>

<template>
  <main id="home">
    <banner></banner>
    <example id="start"></example>
    <nfcat></nfcat>
    <ADFree></ADFree>
    <about></about>
    <advantage></advantage>
    <staff></staff>
    <contact></contact>
    <myFooter></myFooter>
  </main>
</template>
