export default defineNuxtRouteMiddleware((to, from) => {
  const userPinia = useUserPinia();
  // if (!userPinia.getToken) {
  //   return navigateTo(`/welcome?redirect=${to.fullPath}`);
  // }
});
