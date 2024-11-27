<template>
  <div :id="prop.isMobile?'mobile':'pc'">
    <AppHerade :prop="prop"/>
    <PcNav />
    <slot></slot>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useIsMobile } from "@/hooks/useIsMobile";
import { useSystemStore } from '@/stores/system';
import { getApiHead } from '@/api/index.js';
const prop = reactive({
  route: useRoute(),//路由
  navlist: await getApiHead({ siteid: 38 })||[],//获取栏目列表
  systemStore: useSystemStore(),//数据存储器
  site: useSystemStore().systemData.site,//当前站点信息
  isMobile: useIsMobile(),//手机端||pc
  getTo:(item) => {
    const child = item.children?.[0] || {};
    const id = child.id || item.id;
    const pageType = child.pageType || item.pageType;
    return pageType === 1 ? `/about/${id}` :
          pageType === 2 ? `/list/${id}` :
          pageType === 3 ? `/productlist/${id}` :'/';
  },
  getAllChildren:(items:any)=> {
    return items.reduce((acc:any, item:any) => {
        const { children = [], ...rest } = item;
        return [...acc, rest, ...prop.getAllChildren(children)];
    }, []);
  }
});
</script>

<style>
#pc .banner {
  display: flex;
  height: 420px;
}

#pc .banner img {
  width: 100%;
  height: 420px;
  transition: 1s;
}

@keyframes show {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>