import Sortable from 'sortablejs';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('drag', {
    created(el, binding, vnode, prevVnode) {
      // console.log('created', el, binding);
    },
    beforeMount(el, binding, vnode, prevVnode) {
      // console.log('beforeMount', el, binding);
    },
    mounted(el, binding, vnode, prevVnode) {
      // console.log('mounted', el, binding, document);
      el.dragData && el.dragData.destroy();
      el.dragData = null;
      el.dragData = Sortable.create(el, binding.value || {});
    },
    beforeUpdate(el, binding, vnode, prevVnode) {
      // console.log('beforeUpdate', el, binding);
    },
    updated(el, binding, vnode, prevVnode) {
      // console.log('updated', el, binding);
    },
    beforeUnmount(el, binding, vnode, prevVnode) {
      // console.log('beforeUnmount', el, binding);
    },
    unmounted(el, binding, vnode, prevVnode) {
      // console.log('unmounted', el, binding);
      el.dragData && el.dragData.destroy();
      el.dragData = null;
    },
    getSSRProps(binding, vnode) {
      // you can provide SSR-specific props here
      return {};
    },
  });
});
