export default defineNuxtRouteMiddleware((to, from) => {
  const userPinia = useUserPinia();
  const WHITELIST = ['/login', '/register', '/auth/wechat'];
  if (userPinia.getToken) {
    // !WHITELIST.includes(to.path) && refresh()
  }
});
