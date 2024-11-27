<template>
    <nav class="w" v-if="navIds?.length">
        <div v-if="!navIds.includes(892)">
        <template v-for="item in initialState.navs.filter((e:any)=>e.id==navIds[0])[0]?.children" :key="item.id">
            <a :class="{ on: navIds.includes(item.id) }" :href="item.listUrl||item.link">{{ item.seoTitle }}</a>
        </template>
        </div>
        <p style="color: #999;">
        <router-link to="/"><svg t="1731655729936" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5185" width="22" height="22"><path d="M778 908.2H596.7c-26.2 0-47.6-21.4-47.6-47.6V678.5h-72v182.1c0 26.2-21.4 47.6-47.6 47.6H245.7c-26.2 0-47.6-21.4-47.6-47.6V561.8h-81.5c-20.1 0-37.6-12.2-44.6-31-7-18.7-1.7-39.3 13.3-52.4l387.7-346 0.2-0.2c25.6-22.1 63.6-21.3 88.4 1.7l380.1 345.6 0.2 0.2c14.3 13.5 18.9 34 11.6 52.2-7.2 18.2-24.6 30-44.2 30h-83.7v298.7c0 26.2-21.4 47.6-47.6 47.6z m-170.9-58h160.5V503.9h114.7l-360-327.3-0.1-0.1c-3.1-2.9-7.8-3-10.9-0.4L144 503.8h112.1v346.4h163V668.1c0-26.2 21.4-47.6 47.6-47.6h92.8c26.2 0 47.6 21.4 47.6 47.6v182.1z" fill="#8A8A8A" p-id="5186"></path></svg></router-link>
        <router-link v-for="(id,i) in navIds" 
        :to="i==0?
        initialState.navs.filter((e:any)=>e.id==id)[0]?.children[0]?.link||initialState.navs.filter((e:any)=>e.id==id)[0]?.link:
        getAllChildren(initialState.navs).filter((e:any)=>e.id==id)[0]?.link">
            {{ getAllChildren(initialState.navs).filter((e:any)=>e.id==id)[0]?.seoTitle }}
            <template v-if="i<navIds.length-1">></template>
        </router-link>
        </p>
    </nav>
</template>
<script setup lang="ts">
defineProps(['navIds','initialState','getAllChildren']);
import { useIsMobile } from "@/hooks/useIsMobile";
const isMobile = useIsMobile();

</script>
  
  <style scoped>
  @keyframes show {
    0%{
      opacity: 0;
      transform: translateY(-50px);
    }
    100%{
      opacity: 1;
      transform: translateY(0);
    }
  }
  nav{
    padding: 30px 0;
    display: flex;
    row-gap: 10px;
    align-items: center;
    animation: show .5s linear;
    justify-content: space-between;
  }
  nav p,
  nav div{
    display: flex;
    gap: 10px;
    align-items: center;
  }
  nav div > a {
    color: #666;
    transition: .5s;
    font-size: 15px;
    padding: 2px 15px 10px;
    position: relative;
    border-radius: 10px;
  }
  nav div > a::before{
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 3px;
    transition: .5s;
    background-color: #FD5F16;
  }
  nav div > a:hover,
  nav div > .on {
    font-size: 18px;
  }
  nav div > a:hover::before,
  nav div > .on::before {
    width: 20%;
    left: 40%;
  }
  </style>
  