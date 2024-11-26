declare module '#app' {
  interface PageMeta {
    title?: string;
    step?: number;
    breadcrumbs?: any[];
    type?: TrademarkServerType;
    sort?: number;
  }
}

export {};
