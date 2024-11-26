import type { UseFetchOptions } from 'nuxt/app';

export function useServerRequest<DataT, ErrorT>(
  url: string,
  opts?: UseFetchOptions<DataT>,
  meta?: any
): Promise<any> {
  const userPinia = useUserPinia();
  const token = userPinia.getToken;
  const runtimeConfig = useRuntimeConfig();

  const defaultOptions: UseFetchOptions<DataT> = {
    ...opts,
    onRequest({ options }) {
      options.method = opts.method.toString();
      // 是否携带http 不携带就使用默认值
      const baseURL = runtimeConfig.serverBaseUrl
        ? runtimeConfig.serverBaseUrl
        : runtimeConfig.public.clientBaseUrl;
      // 微服务名称 根据不同微服务调用不同接口
      options.baseURL = meta.sever ? `${baseURL}/${meta.sever}` : baseURL;
      // 添加请求头,没登录不携带token
      options.headers = new Headers(options.headers);
      meta?.auth && options.headers.set('Authorization', `Bearer ${token}`);
    },
  };
  console.log(opts);
  const fetch = useFetch<DataT, ErrorT>(url, {
    ...defaultOptions,
  } as any);

  // 实际请求
  return new Promise((reslove, reject) => {
    fetch.then((res: any) => {
      const data = res.data;

      if (res.status.value === 'success') {
        return reslove(data);
      }
      console.group('🚀 file: useClientRequest.ts:35 🚀');
      console.log('错误接口', url);
      console.log('请求方式', opts.method);
      console.log('错误码', data.code);
      console.log('错误提示', data.message || data.msg);
      console.groupEnd();

      return checkError(data, meta);
    });
  });
}
