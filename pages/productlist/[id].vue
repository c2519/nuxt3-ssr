<script setup lang="ts">
import { getApiSite, getApiContent } from '@/api/index.js';
import { de } from 'element-plus/es/locales.mjs';
import { useWindowHeight } from '~/hooks/useWindowHeight';
import { useSystemStore } from '@/stores/system';
const innerHeight = useWindowHeight();
const systemStore = useSystemStore();
const form = reactive({
  innerHeight: innerHeight,
  site: {},
  content: null,
});

const route = useRoute();

const content = await getApiContent(route.params.id);
form.content = content;

useSeoMeta({
  title: form.content.title,
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
console.log();

onMounted(async () => {
  //alert(form.innerHeight);
});
</script>

<template>
  <div class="home">
    <NuxtLayout>
      <h2>{{ form.content.title }}</h2>
      <article>
        <section class="cont" v-html="form.content.content"></section>
      </article>
    </NuxtLayout>
  </div>
</template>

<style>
@keyframes show2 {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

#pc .data {
  animation: show2 1s linear;
}
</style>

<style scoped>
@keyframes show {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

#pc .cont {
  margin: auto;
  padding: 10px;
  animation: show 0.5s linear;
}

#mobile .cont {
  width: 100%;
  padding: 1rem;
}

.about {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
}

@keyframes show2 {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes show3 {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.about img {
  width: 55%;
  animation: show2 0.5s linear;
}

#mobile .about {
  padding: 1rem;
}

#mobile .about img {
  width: 100%;
}

.about div {
  width: 40%;
  height: 460px;
  display: flex;
  row-gap: 30px;
  color: #666;
  padding: 20px 0;
  flex-direction: column;
  animation: show3 0.5s linear;
}

#mobile .about div {
  width: 100%;
  height: 12rem;
  row-gap: 2rem;
  padding: 1.2rem 0;
}

.about div i {
  color: #fd5f16;
  font-style: normal;
}

.about>div a {
  width: 90px;
  display: flex;
  column-gap: 5px;
  text-align: center;
  align-items: center;
  color: white;
  transition: 0.5s;
  padding: 8px 15px;
  border-radius: 5px;
  background-color: #fd5f19;
}

#mobile .about>div a {
  width: 5.5rem;
  column-gap: 0.2rem;
  padding: 0.3rem 0.9rem;
  border-radius: 0.2rem;
}

.about>div a:hover {
  color: white;
  background-color: #666;
}

article>section h3 {
  color: #666;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 15px;
  background-color: #f6f6f6;
}

#mobile article>section>h3 {
  font-size: 1rem;
  padding: 0.7rem 0.9rem;
}

article>section>.swiper {
  width: 800px;
  margin: 20px auto;
  display: flex;
  overflow: hidden;
}

#mobile article>section>.swiper {
  width: 90%;
  margin: 1rem auto;
}

article>section>.swiper .swiper-slide {
  display: flex;
  padding: 20px;
  row-gap: 10px;
  transition: 2s;
  align-items: center;
  flex-direction: column;
  background-color: #f6f6f6;
}

#mobile article>section>.swiper .swiper-slide {
  padding: 1rem;
  row-gap: 0.5rem;
}

article>section>.swiper .swiper-slide:hover {
  background-color: #fd5f16;
}

article>section>.swiper .swiper-slide:hover p img {
  transform: scale(1.2);
}

article>section>.swiper .swiper-slide p {
  font-size: 18px;
  width: 100%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  white-space: nowrap;
}

article>section>.swiper .swiper-slide img {
  width: 100%;
  height: 200px;
  transition: 0.5s;
}

#mobile article>section>.swiper .swiper-slide img {
  height: 3rem;
}

#mobile article>section>.swiper .swiper-slide p {
  font-size: 0.8rem;
}

article>section>.swiper .swiper-slide p:nth-child(3) {
  color: #666;
  font-size: 15px;
}

#mobile article>section>.swiper .swiper-slide p:nth-child(3) {
  font-size: 0.7rem;
}

article>section>.swiper .swiper-slide a {
  color: #666;
  font-size: 14px;
  transition: 0.5s;
  padding: 2px 10px;
  border-radius: 20px;
  border: 1px solid #666;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  white-space: nowrap;
}

#mobile article>section>.swiper .swiper-slide a {
  font-size: 0.6rem;
  padding: 0.1rem 0.4rem;
  border-radius: 1rem;
}

article>section>.swiper .swiper-slide:hover p {
  color: white;
}

article>section>.swiper .swiper-slide:hover a {
  color: #fd5f16;
  border-color: white;
  background-color: white;
}

#pc #contact>div {
  margin-top: 20px;
}

#pc #contact>div:nth-child(2) {
  display: grid;
  column-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}

#pc #contact>div:nth-child(2)>div {
  display: flex;
  row-gap: 20px;
  align-items: center;
  flex-direction: column;
}

#pc #contact>div:nth-child(2)>div>p:nth-child(1) {
  padding: 20px;
  border-radius: 50%;
  border: 1px solid #fd5f16;
}

#pc #contact>div:nth-child(2)>div>p:nth-child(1) svg {
  transition: 1s;
}

#pc #contact>div:nth-child(2)>div:hover>p:nth-child(1) svg {
  transform: rotateY(360deg);
}

#pc #contact>div:nth-child(2)>div>p:nth-child(1) {
  padding: 20px;
  border-radius: 50%;
  border: 1px solid #fd5f16;
}

:is(#mobile, #pc) #contact>div:nth-child(2)>div>p:nth-child(2) {
  color: #fd5f16;
}

:is(#mobile, #pc) #contact>div:nth-child(2)>div>p:nth-child(3) {
  color: #999;
}

:is(#mobile, #pc) #contact>.phone {
  display: grid;
  border: 1px solid #ddd;
  border-right: none;
  border-bottom: none;
  grid-template-columns: repeat(2, 1fr);
}

#mobile #contact>.phone {
  width: 90%;
  margin: auto;
  grid-template-columns: repeat(1, 1fr);
}

:is(#mobile, #pc) #contact>.phone>div {
  display: grid;
  padding: 30px;
  column-gap: 20px;
  align-items: center;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  grid-template-columns: repeat(2, 1fr);
}

#mobile #contact>.phone>div {
  padding: 1.5rem;
  column-gap: 1rem;
}

:is(#mobile, #pc) #contact>.phone>div>h2 {
  text-align: center;
  font-size: 18px;
  color: #fd5f16;
  font-weight: bold;
}

#mobile #contact>.phone>div>h2 {
  font-size: 1.1rem;
}

:is(#mobile, #pc) #contact>.phone>div>p {
  color: #666;
}

#mobile #contact>div:nth-child(2) {
  display: flex;
  row-gap: 1rem;
  padding: 1rem 0;
  align-items: center;
  flex-direction: column;
}

#mobile #contact>div:nth-child(2) div {
  display: flex;
  row-gap: 0.5rem;
  align-items: center;
  flex-direction: column;
}

#mobile #contact>div:nth-child(2) div p:nth-child(1) {
  padding: 0.5rem;
  border-radius: 50%;
  border: 1px solid #fd5f16;
}

#mobile #contact>img:nth-child(3) {
  width: 90%;
}
</style>
