/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NUXT_PUBLIC_TITLE: string;
  readonly NUXT_PUBLIC_COOKIE_DOMAIN: string;
  readonly NUXT_PUBLIC_COOKIE_PATH: string;
  readonly NUXT_PUBLIC_COOKIE_SAMESITE: true | false | 'lax' | 'strict' | 'none' | undefined;
  readonly NUXT_PUBLIC_DELETE_CONSOLE: 'true' | 'false';
  readonly NUXT_PUBLIC_API_CLIENT_BASEURL: string;
  readonly NUXT_PUBLIC_API_SERVER_BASEURL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
