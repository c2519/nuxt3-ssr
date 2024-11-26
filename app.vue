<script setup lang="ts">
import { getApiSite } from '@/api/index.js';
import { setTheme } from '@/hooks/theme';
onMounted(setTheme);
const systemStore = useSystemStore();
const nuxtApp = useNuxtApp();
console.table([
  {
    nuxt: nuxtApp.versions.nuxt,
    vue: nuxtApp.versions.vue,
  },
]);

await callOnce(async () => {
  const res = await getApiSite();

  systemStore.setSystemData(res);
});


</script>

<template>
  <div class="nuxtApp">
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style lang="scss" scoped>
.nuxtApp {
  padding: 20px;
  color: var(--primary-color);
  height: 100vh;
  /* background-image: url('~/public/images/bg.jpg'); */
  /* background-size: 100% 100%; */
}
</style>
