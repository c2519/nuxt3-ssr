<template>
  <div class="top">
    <div class="w">
      <span>
        <svg t="1731636005192" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="4288" width="22" height="22">
          <path
            d="M824.32 781.312H197.12A94.8224 94.8224 0 0 1 102.4 686.592V367.616a94.8224 94.8224 0 0 1 94.72-94.72H824.32a94.8224 94.8224 0 0 1 94.72 94.72v318.976a94.8224 94.8224 0 0 1-94.72 94.72zM197.12 318.976a48.6912 48.6912 0 0 0-48.64 48.64v318.976a48.6912 48.6912 0 0 0 48.64 48.64H824.32a48.6912 48.6912 0 0 0 48.64-48.64V367.616a48.6912 48.6912 0 0 0-48.64-48.64z"
            fill="#FD5F16" p-id="4289"></path>
          <path
            d="M510.72 579.0208a22.784 22.784 0 0 1-12.9024-3.9424L148.48 339.0976a23.04 23.04 0 1 1 25.6-38.1952l336.896 227.4816 344.3712-222.6176a23.04 23.04 0 0 1 24.9856 38.7072l-357.12 230.8608a22.9376 22.9376 0 0 1-12.4928 3.6864z"
            fill="#FD5F16" p-id="4290"></path>
        </svg>
        {{ systemStore.systemData.site.email }}
      </span>
      <span v-for="phone in systemStore.systemData.site.tel?.split('&')" :key="phone">
        <svg t="1731636153098" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="5509" width="22" height="22">
          <path
            d="M766.438946 943.5579c-4.429893 0-7.181563-0.145309-7.476275-0.160659l-0.290619-0.01842c-42.736337-3.02387-90.967828-17.787108-139.483798-42.693358l-0.587378-0.315178-54.078663-30.248931c-102.549607-56.177464-259.853259-218.356147-266.500657-225.233787l-11.432377-11.828396 0.092098-0.11461c-27.666106-29.688159-84.594677-94.66094-133.902686-175.60753-55.477522-91.075275-81.612763-169.619142-77.67815-233.44889 2.922563-47.425126 22.463618-85.97307 58.07979-114.573455 38.268582-30.728862 73.250304-43.540655 106.933451-39.162952 36.108383 4.690836 69.019956 28.681226 103.573937 75.497485 2.307555 3.127224 4.591575 6.207375 6.842849 9.244548 25.679869 34.643008 47.857984 64.562435 55.935963 95.558379 9.42772 36.173874-1.87572 69.727061-34.558074 102.576213l-1.133823 1.139963-0.239454 0.143263c-1.543146 1.576915-8.922207 10.053983-9.100262 28.119431-0.180102 18.291598 6.823406 40.11565 20.814048 64.866357 19.22076 34.000372 51.161217 72.403007 94.934163 114.14162 73.369008 69.476351 120.596635 88.594781 147.289578 92.391247 23.400966 3.329838 33.67803-4.653997 35.45756-6.243191l0.306992-0.428765-0.25071 0.378623c0.052189-0.048095 0.096191-0.088004 0.12996-0.12075 27.874861-32.115442 63.648622-42.73122 106.3297-31.54853 30.785144 8.064676 64.736397 26.939559 110.083188 61.199851 34.673707 26.194592 55.872518 52.227502 64.805982 79.588663 9.91379 30.357402 5.175883 61.742203-14.482853 95.946212-5.145184 8.953929-16.573467 12.040221-25.526373 6.892991-8.951883-5.145184-12.039197-16.573467-6.892991-25.526373 14.275121-24.837688 17.885346-45.717228 11.357675-65.705468-6.482645-19.854187-23.427572-39.926338-51.800783-61.36051-53.480029-40.404222-80.984453-50.661843-97.019661-54.862515-29.009707-7.600095-50.218752-1.410116-68.768223 20.064988-2.236947 2.578732-16.8559 18.027585-47.285956 19.762089-50.306756 2.858094-114.064872-31.898501-189.489702-103.322204C364.582509 505.738389 321.769424 435.174264 324.130192 378.769626c1.333368-31.846312 17.013489-48.312332 21.691021-52.538587 46.799886-47.340191 27.248597-78.138638-25.329898-149.069107-2.266623-3.057639-4.564969-6.15928-6.887874-9.30697-28.097942-38.068014-52.979632-57.33073-78.30646-60.621682-23.048949-2.994194-48.796356 7.223518-78.70248 31.237445-27.442002 22.037922-41.891086 50.730405-44.171012 87.718831-3.406586 55.261605 21.591761 128.46586 72.290443 211.69647 55.645344 91.351568 121.350812 161.615864 140.164297 180.974771l2.491751 2.564405c20.531616 20.967544 164.28874 166.17981 255.178797 215.937051l0.149403 0.082888 53.862745 30.126134c43.889603 22.49227 86.947258 35.799344 124.561947 38.494733 1.385557 0.062422 16.679891 0.665149 33.288151-2.122337 5.990434-1.004887 12.458753-2.228761 19.305695-3.52222 25.75764-4.867868 57.81373-10.927887 100.929714-12.644995 10.296507-0.403183 19.015076 7.619538 19.425422 17.936511 0.411369 10.316973-7.618515 19.015076-17.936511 19.425422-40.364313 1.608637-70.922283 7.385201-95.474468 12.025894-7.04137 1.330298-13.690814 2.586918-20.058848 3.656273C786.892791 943.120948 774.135232 943.5579 766.438946 943.5579z"
            fill="#FD5F16" p-id="5510"></path>
        </svg>
        {{ phone }}
      </span>
      <p>
        <img class="search" title="查询" src="https://tuchuang.wxsushang.com/2024/11/15/5912fb3b4342d.png">
        <input class="search" type="text" placeholder="请输入产品名称">
        <img class="zh" src="../../assets/cn.png" title="中文">
        <img class="en" src="../../assets/en.png" title="英文">
      </p>
    </div>
  </div>
  <nav class="w" v-if="!state.isMobile">
    <h1>
      <img class="logo" :src="systemStore.systemData.site.logo" alt="logo">
      {{ systemStore.systemData.site.seoTitle }}
    </h1>
    <div>

      <div v-for="(item, i) in state.navlist " :key="item.id">
        <nuxt-link v-if="item.pageType === 0" :class="route.params.id == item.id ? 'on' : ''">{{ item.seoTitle
          }}</nuxt-link>
        <nuxt-link v-if="item.pageType === 1" :class="route.params.id == item.id ? 'on' : ''"
          :to="`/about/${item.id}`">{{ item.seoTitle }}</nuxt-link>
        <nuxt-link v-if="item.pageType === 2" :class="route.params.id == item.id ? 'on' : ''"
          :to="`/list/${item.id}`">{{ item.seoTitle }}</nuxt-link>
        <nuxt-link v-if="item.pageType === 3" :class="route.params.id == item.id ? 'on' : ''"
          :to="`/productlist/${item.id}`">{{ item.seoTitle }}</nuxt-link>
        <nuxt-link v-if="item.pageType === 4" :class="route.params.id == item.id ? 'on' : ''" :to="`/`">{{ item.seoTitle
          }}</nuxt-link>
        <template v-if="item.children?.length">
          <span></span>
          <div>
            <template v-for="item2 in item.children" :key="item2.id">
              <nuxt-link v-if="item2.pageType === 0">{{
                item2.seoTitle }}</nuxt-link>
              <nuxt-link v-if="item2.pageType === 1" :to="`/about/${item2.id}`">{{ item2.seoTitle }}</nuxt-link>
              <nuxt-link v-if="item2.pageType === 2" :to="`/list/${item2.id}`">{{ item2.seoTitle }}</nuxt-link>
              <nuxt-link v-if="item2.pageType === 3" :to="`/productlist/${item2.id}`">{{ item2.seoTitle
                }}</nuxt-link>
              <nuxt-link v-if="item2.pageType === 4" :to="`/`">{{
                item2.seoTitle }} </nuxt-link>
            </template>
          </div>
        </template>
      </div>

    </div>
  </nav>
  <div v-if="state.isMobile">111</div>

  <hr>
</template>

<script setup lang="ts">
import { useIsMobile } from "@/hooks/useIsMobile";
import { getApiHead } from '@/api/index.js';
import { useSystemStore } from '@/stores/system';
const systemStore = useSystemStore();
const isMobile = useIsMobile();
const state = reactive({
  navlist: [],
  navIds: [],
  isMobile: isMobile
});
const route = useRoute()
const res = await getApiHead({ siteid: 38 });
state.navlist = res;
onMounted(async () => {
});
</script>

<style scoped>
#pc>.top {
  padding: 10px;
  background-color: #243559;
  border-bottom: 2px solid #FD5F16;
}

#pc>.top>.w {
  display: grid;
  color: white;
  font-size: 12px;
  font-weight: bold;
  align-items: center;
  grid-template-columns: .18fr .13fr .17fr .17fr .3fr;
}

#pc>.top>.w>span {
  display: flex;
  column-gap: 5px;
  align-items: center;
}

#pc>.top>.w>p {
  padding-left: 60px;
  display: flex;
  column-gap: 10px;
  align-items: center;
  position: relative;
}

#pc>.top>.w>p>img:nth-child(1) {
  position: absolute;
  left: 254px;
  top: 1px;
  width: 34px;
  padding: 5px 10px;
  display: none;
}

#pc>.top>.w>p input {
  flex: 1;
  outline: none;
  transition: .5s;
  padding: 2px 10px;
  padding-left: 25px;
  border-radius: 3px;
  border: 2px solid white;
  background: url('https://tuchuang.wxsushang.com/2024/11/15/5912fb3b4342d.png')left 5px center/auto 70% no-repeat,
    linear-gradient(to right, transparent 100%, #FD5F16 86%);
}

@keyframes inputShow {
  0% {
    display: none;
  }

  90% {
    display: none;
  }

  100% {
    display: block;
  }
}

#pc>.top>.w>p:hover img:nth-child(1) {
  animation: inputShow .5s forwards;
  display: block;
}

#pc>.top>.w>p:hover input,
#pc>.top>.w>p input:focus {
  padding-left: 10px;
  padding-right: 35px;
  border-color: #FD5F16;
  background: url('https://tuchuang.wxsushang.com/2024/11/15/5912fb3b4342d.png')right 5px center/auto 70% no-repeat,
    linear-gradient(to right, transparent 86%, #FD5F16 86%);
}

#pc>.top>.w>p input:focus {
  color: black;
  background: url('https://tuchuang.wxsushang.com/2024/11/15/5912fb3b4342d.png')right 5px center/auto 70% no-repeat,
    linear-gradient(to right, white 86%, #FD5F16 86%);
}

#pc>.top>.w>p img {
  cursor: pointer;
}

#pc>nav {
  display: flex;
  column-gap: 20px;
  align-items: center;
  justify-content: space-between;
}

#pc>nav>h1 {
  display: flex;
  font-size: 27px;
  column-gap: 10px;
  align-items: center;
}

#pc>nav>h1>.logo {
  width: 60px;
}

#pc>nav>div {
  flex: 1;
  display: flex;
  column-gap: 5px;
  justify-content: flex-end
}

#pc>nav>div>div {
  display: flex;
  column-gap: 5px;
  position: relative;
  align-items: center;
  justify-content: center;
}

#pc>nav>div>div>span {
  float: right;
  margin-top: -7px;
  margin-left: -20px;
  margin-right: 5px;
  transition: .3s linear;
  border: 5px solid transparent;
  border-bottom-color: #999;
}

#pc>nav>div>div>.on,
#pc>nav>div>div>a:hover {
  color: white;
}

#pc>nav>div>div:hover>span {
  margin-top: 5px;
  border-top-color: white;
  border-bottom-color: transparent;
}

#pc>nav>div>div>a {
  color: black;
  font-size: 15px;
  min-width: 90px;
  position: relative;
  text-align: center;
  padding: 34px 10px;
}

#pc>nav>div>div>a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  z-index: -1;
  height: 100%;
  transition: .5s;
  background-color: #FD5F16;
}

#pc>nav>div>div>.on::before,
#pc>nav>div>div>a:hover::before {
  left: 0;
  width: 100%;
}

#pc>nav>div>div:hover>div {
  max-height: 100vh;
  overflow: initial;
}

#pc>nav>div>div:hover>div>a {
  margin: 0;
}

#pc>nav>div>div>div {
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  overflow: hidden;
  max-height: 0;
  transition: .5s;
  display: flex;
  text-align: center;
  flex-direction: column;
  z-index: 100;
}

#pc>nav>div>div>div>a {
  transition: .5s;
  margin-top: -20px;
  width: 100%;
  color: black;
  padding: 5px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid #ddd;
}

#pc>nav>div>div>div>a>span {
  color: white;
}

#pc>nav>div>div>div>.on,
#pc>nav>div>div>div>a:hover {
  color: white;
  background-color: #FD5F16;
}
</style>
