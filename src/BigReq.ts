import Request, { Headers, Method } from './Request';

export type Version = 'v2' | 'v3';

export interface BigCommerceAPICredentials {
  ACCESS_TOKEN: string;
  STORE_HASH: string;
  CLIENT_ID: string;
  CLIENT_SECRET: string;
}

export interface BigReqRequestConfig {
  version?: Version;
  headers?: Headers;
  body?: object;
}

export default class BigReq {
  private ACCESS_TOKEN: string;
  private STORE_HASH: string;
  private CLIENT_ID: string;
  private CLIENT_SECRET: string;
  private defaultVersion: Version = 'v3';

  constructor({ ACCESS_TOKEN, STORE_HASH, CLIENT_ID, CLIENT_SECRET }: BigCommerceAPICredentials) {
    if (!ACCESS_TOKEN || !STORE_HASH || !CLIENT_ID || !CLIENT_SECRET) {
      throw new SyntaxError(
        'BigReq must be initialized with a configuration object containing values for' +
          'properties "ACCESS_TOKEN", "STORE_HASH", "CLIENT_ID", and "CLIENT_SECRET"'
      );
    }

    this.ACCESS_TOKEN = ACCESS_TOKEN;
    this.STORE_HASH = STORE_HASH;
    this.CLIENT_ID = CLIENT_ID;
    this.CLIENT_SECRET = CLIENT_SECRET;
  }

  private request = (method: Method, path: string, config?: BigReqRequestConfig) => {
    const url = `https://api.bigcommerce.com/stores/${this.STORE_HASH}/${
      config?.version || this.defaultVersion
    }${path}`;

    const headers = {
      ...config?.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': this.ACCESS_TOKEN,
    };

    const body = config?.body || null;

    const req = new Request({
      url,
      method,
      headers,
      body,
    });

    return req.run();
  };

  get = async (path: string, config?: BigReqRequestConfig) => {
    return this.request('GET', path, config);
  };

  post = async (path: string, config?: BigReqRequestConfig) => {
    return this.request('POST', path, config);
  };

  put = async (path: string, config?: BigReqRequestConfig) => {
    return this.request('PUT', path, config);
  };

  delete = async (path: string, config?: BigReqRequestConfig) => {
    return this.request('DELETE', path, config);
  };
}
