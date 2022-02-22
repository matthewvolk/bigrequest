import Request from './Request';
import type {
  Version,
  Method,
  BigReqConfig,
  BigReqInternalRequestConfig,
} from './types';

export default class BigReq {
  private ACCESS_TOKEN: string | null;
  private STORE_HASH: string | null;
  private CLIENT_ID: string | null;
  private CLIENT_SECRET: string | null;
  private REDIRECT_URI: string | null;
  private defaultVersion: Version = 'v3';

  constructor(config: BigReqConfig) {
    if (!config) {
      throw new Error('BigReq must be initialized with a configuration object');
    }

    this.ACCESS_TOKEN = config.ACCESS_TOKEN || null;
    this.STORE_HASH = config.STORE_HASH || null;
    this.CLIENT_ID = config.CLIENT_ID || null;
    this.CLIENT_SECRET = config.CLIENT_SECRET || null;
    this.REDIRECT_URI = config.REDIRECT_URI || null;
  }

  private request = (
    method: Method,
    path: string,
    config?: BigReqInternalRequestConfig
  ) => {
    const url = `https://api.bigcommerce.com/stores/${this.STORE_HASH}/${
      config?.version || this.defaultVersion
    }${path}`;

    const headers = {
      ...config?.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': this.ACCESS_TOKEN || '',
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

  authorize = async (code: string, context: string, scope: string) => {
    const url =
      `https://login.bigcommerce.com/oauth2/token` +
      `?client_id=${this.CLIENT_ID}` +
      `&client_secret=${this.CLIENT_SECRET}` +
      `&code=${code}` +
      `&scope=${scope}` +
      `&context=${context}` +
      `&redirect_uri=${this.REDIRECT_URI}` +
      `&grant_type=authorization_code`;

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const req = new Request({
      url,
      method: 'POST',
      headers,
    });

    return req.run();
  };

  get = async (path: string, config?: BigReqInternalRequestConfig) => {
    return this.request('GET', path, config);
  };

  post = async (path: string, config?: BigReqInternalRequestConfig) => {
    return this.request('POST', path, config);
  };

  put = async (path: string, config?: BigReqInternalRequestConfig) => {
    return this.request('PUT', path, config);
  };

  delete = async (path: string, config?: BigReqInternalRequestConfig) => {
    return this.request('DELETE', path, config);
  };
}
