<script setup lang="ts">
import { getApiSite, getApiContent } from '@/api/index.js';
import { de } from 'element-plus/es/locales.mjs';
import { useWindowHeight } from '~/hooks/useWindowHeight';
import { useSystemStore } from '@/stores/system';
const innerHeight = useWindowHeight();

const systemStore = useSystemStore();
const form = reactive({
  bannerlist: [],
});
form.bannerlist = await getApiBanner({ siteId: 38, CategoryId: 880 });



useSeoMeta({
  title: systemStore.systemData.site.title,
  ogTitle: 'My Amazing Site',
  description: systemStore.systemData.site.title,
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});

onMounted(async () => {
  //alert(form.innerHeight);
});
</script>

<template>
  <NuxtLayout>
    <div v-for="(item, index) in form.bannerlist" :key="index">
      {{ item.imgUrl }}
    </div>
    <!-- {{ systemStore.systemData.site }} -->
  </NuxtLayout>
</template>

<style lang="scss" scoped></style>
