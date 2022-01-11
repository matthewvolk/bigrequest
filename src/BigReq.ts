import https from 'https';

type Version = 'v2' | 'v3';
type Method = 'GET' | 'DELETE' | 'POST' | 'PUT';

interface BigCommerceAPICredentials {
  ACCESS_TOKEN: string;
  STORE_HASH: string;
  CLIENT_ID: string;
  CLIENT_SECRET: string;
}

interface RequestConfig {
  version?: Version;
  headers?: Record<string, string | number | boolean>;
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
    const version = config?.version || this.defaultVersion;
    const configHeaders = config?.headers || {};
    const configBody = config?.body || null;

    return new Promise((resolve, reject) => {
      const req = https.request(
        `https://api.bigcommerce.com/stores/${this.STORE_HASH}/${version}${path}`,
        {
          method,
          headers: {
            'X-Auth-Token': this.ACCESS_TOKEN,
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...configHeaders,
          },
        },
        res => {
          const body: Buffer[] = [];

          console.log('Response Content Type', res.headers['content-type']);

          if (res.statusCode === 429) {
            const error = new Error(`API Limit Reached`);
            return reject(error);
          }

          res.on('data', chunk => {
            body.push(chunk);
          });

          res.on('end', () => {
            if (res.statusCode! >= 400 && res.statusCode! <= 600) {
              const error = new Error(
                `Request returned error code: ${res.statusCode} ${res.statusMessage}`
              );
              return reject(error);
            }
            if (!/application\/json/.test(res.headers['content-type']!) || body.length === 0) {
              return resolve({body, status: res.statusCode});
            }
            const json = JSON.parse(body.join(''));
            if (json.error || json.errors) {
              const err = new Error(json.error || JSON.stringify(json.errors));
              return reject(err);
            }
            return resolve(json);
          });
        }
      );
      req.on('error', error => {
        return reject(error);
      });
      if (configBody) {
        req.write(JSON.stringify(configBody));
      }
      req.end();
    });
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
