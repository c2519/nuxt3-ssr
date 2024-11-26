/** 网络请求错误处理 */
export function checkError(data, meta) {
  if (data.code === 401) {
    clearNuxtData();
    resetLoginConfirm();
    return;
  }

  import.meta.client && checkStatus(data.code, meta.toast, data.message || data.msg);

  // 如果需要catch返回，则进行reject
  if (meta?.catch) {
    return Promise.reject(data);
  }

  // 返回一个pending中的promise，请求不会进入catch中
  return new Promise(() => {});
}

/** 校验网络请求状态码 */
export function checkStatus(status: number, toast: boolean, message: string) {
  if (toast !== false) {
    switch (status) {
      // case 400:
      //   toast && ElMessage.error('请求失败！请您稍后重试')
      //   break
      // case 403:
      //   toast !== false && ElMessage.error('当前账号无权限访问！')
      //   break
      // case 404:
      //   toast !== false && ElMessage.error('你所访问的资源不存在！')
      //   break
      // case 405:
      //   toast !== false && ElMessage.error('请求方式错误！请您稍后重试')
      //   break
      // case 408:
      //   toast !== false && ElMessage.error('请求超时！请您稍后重试')
      //   break
      // case 500:
      //   ElMessage.error('服务异常！')
      //   break
      // case 502:
      //   toast !== false && ElMessage.error('网关错误！')
      //   break
      // case 503:
      //   toast !== false && ElMessage.error('服务不可用！')
      //   break
      // case 504:
      //   toast !== false && ElMessage.error('网关超时！')
      //   break
      default:
        console.log('请求失败！请您稍后重试');
    }
  }
}
/** 登陆失效判断 */
export function resetLoginConfirm() {
  const userPinia = useUserPinia();
  const route = useRoute();
  // ElMessageBox.confirm('登录已失效，是否重新登录', {
  //   title: '温馨提示',
  //   type: 'warning',
  //   draggable: true,
  //   center: true,
  //   confirmButtonText: '重新登陆',
  //   cancelButtonText: '暂不登录',
  // }).then(() => {
  //   userPinia.clearCache()
  //   navigateTo(`/login?redirect=${route.path}`)
  // }).catch(() => {
  //   userPinia.clearCache()
  //   navigateTo('/')
  //   return new Promise(() => { })
  // })
}
