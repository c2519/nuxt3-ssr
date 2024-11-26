// stores/system.js
import { defineStore } from 'pinia';

export const useSystemStore = defineStore('system', () => {
  // 定义状态
  const systemData = reactive({
    site: null,
  });

  // 定义一个方法来设置系统数据
  const setSystemData = data => {
    systemData.site = data;
  };

  // 返回 state 和方法
  return {
    systemData,
    setSystemData,
  };
});
