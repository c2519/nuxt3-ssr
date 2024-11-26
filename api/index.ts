enum API {
  getApiSite = '/site/38',
  getApiHead = '/article/new/category',
  getApiContent = '/article/show',
  getApiBanner = '/banner/article',
  getApiIndexList = '/toplist/popular',
}

export function getApiSite() {
  return useServerRequest(
    API.getApiSite,
    {
      method: Method.GET,
      params: {},
    },
    { sever: SERVER_NAME.CLIENT, auth: false }
  );
}

export function getApiHead(data: any) {
  return useServerRequest(
    API.getApiHead,
    {
      method: Method.GET,
      params: data,
    },
    { sever: SERVER_NAME.CLIENT, auth: false }
  );
}

export function getApiContent(data: any) {
  return useServerRequest(
    `${API.getApiContent}/${data}`,
    {
      method: Method.GET,
    },
    { sever: SERVER_NAME.CLIENT, auth: false }
  );
}

export function getApiBanner(data: any) {
  return useServerRequest(
    API.getApiBanner,
    {
      method: Method.GET,
      params: data,
    },
    { sever: SERVER_NAME.CLIENT, auth: false }
  );
}
