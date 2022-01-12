import Request, {Headers, Method} from './Request';

export type Version = 'v2' | 'v3';

export interface BigCommerceAPICredentials {
  ACCESS_TOKEN: string;
  STORE_HASH: string;
  CLIENT_ID: string;
  CLIENT_SECRET: string;
}

export interface RequestConfig {
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

  constructor({ACCESS_TOKEN, STORE_HASH, CLIENT_ID, CLIENT_SECRET}: BigCommerceAPICredentials) {
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

  private request = (path: string, method: Method, config?: RequestConfig) => {
    // Check if version is explicitly set, otherwise default to 'v3'
    const version = config?.version || this.defaultVersion;

    // Construct URL from API host, STORE_HASH, version, and path
    const url = `https://api.bigcommerce.com/stores/${this.STORE_HASH}/${version}${path}`;

    // Define request body for POST/PUT/DELETE
    const configBody = config?.body || null;

    // Define HTTP headers, adding some defaults
    const configHeaders = config?.headers || {};
    configHeaders.Accept = 'application/json';
    configHeaders['Content-Type'] = 'application/json';
    configHeaders['X-Auth-Token'] = this.ACCESS_TOKEN;

    const req = new Request(method, url, configHeaders, configBody);
    return req.run();
  };

  get = async (path: string, config?: RequestConfig) => {
    return this.request(path, 'GET', config);
  };

  post = async (path: string, config?: RequestConfig) => {
    return this.request(path, 'POST', config);
  };

  put = async (path: string, config?: RequestConfig) => {
    return this.request(path, 'PUT', config);
  };

  delete = async (path: string, config?: RequestConfig) => {
    return this.request(path, 'DELETE', config);
  };
}
