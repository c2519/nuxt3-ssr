export const useUserPinia = defineStore(
  'user',
  () => {
    const token = ref<string>(undefined);

    const getToken = computed(() => token.value);

    const setToken = (value: string) => {
      token.value = value;
    };

    const TokenRefresh = () => {
      // await Promise.all([refresh(), getUserAuth()])
    };

    /** 注销账号 */
    const LogoutAccount = () => {
      // ElMessageBox.confirm('确认注销并退出登录么？', {
      //   title: '温馨提示',
      //   type: 'warning',
      //   draggable: true,
      //   center: true,
      // }).then(() => {
      //   token.value = undefined
      //   logout()
      // }).catch(() => {
      //   return new Promise(() => { })
      // })
    };

    return {
      // #region <state>
      token,
      // #endregion
      // #region <getters>
      getToken,
      // #endregion
      // #region <actions>
      setToken,
      TokenRefresh,
      LogoutAccount,
      // #endregion
    };
  },
  {
    persist: [
      {
        pick: ['userId'],
        storage: persistedState.localStorage,
      },
      {
        pick: ['token'],
        storage: persistedState.cookiesWithOptions({ maxAge: 604800 }),
      },
    ],
  }
);
