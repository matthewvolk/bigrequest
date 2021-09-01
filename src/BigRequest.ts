import https from 'https';

interface BigCommerceAPICredentials {
  ACCESS_TOKEN: string;
  STORE_HASH: string;
  CLIENT_ID: string;
  CLIENT_SECRET: string;
}

export default class BigRequest {
  private ACCESS_TOKEN: string;
  private STORE_HASH: string;
  private CLIENT_ID: string;
  private CLIENT_SECRET: string;
  private API_VERSION: string;

  constructor({ACCESS_TOKEN, STORE_HASH, CLIENT_ID, CLIENT_SECRET}: BigCommerceAPICredentials) {
    if (!ACCESS_TOKEN) throw new SyntaxError('ACCESS_TOKEN is a required parameter.');
    if (!STORE_HASH) throw new SyntaxError('STORE_HASH is a required parameter.');
    if (!CLIENT_ID) throw new SyntaxError('CLIENT_ID is a required parameter.');
    if (!CLIENT_SECRET) throw new SyntaxError('CLIENT_SECRET is a required parameter.');

    this.ACCESS_TOKEN = ACCESS_TOKEN;
    this.STORE_HASH = STORE_HASH;
    this.CLIENT_ID = CLIENT_ID;
    this.CLIENT_SECRET = CLIENT_SECRET;
    this.API_VERSION = 'v3';
  }

  v2 = () => {
    this.API_VERSION = 'v2';
    return this;
  };

  v3 = () => {
    this.API_VERSION = 'v3';
    return this;
  };

  get = async (path: string) => {
    const url = `https://api.bigcommerce.com/stores/${this.STORE_HASH}/${this.API_VERSION}${path}`;
    const headers = {
      'X-Auth-Token': this.ACCESS_TOKEN,
      Accept: 'application/json',
    };
    return new Promise((resolve, reject) => {
      const req = https.request(
        url,
        {
          method: 'GET',
          headers,
        },
        res => {
          let body: Buffer[] = [];

          console.log('Response Content Type', res.headers['content-type']);

          res.on('data', chunk => {
            body.push(chunk);
          });

          res.on('end', () => {
            return resolve(JSON.parse(body.join('')));
          });
        }
      );
      req.on('error', error => reject(error));
      req.end();
    });
  };

  post = async (path: string, body: {}) => {
    const jsonBody = JSON.stringify(body);
    const url = `https://api.bigcommerce.com/stores/${this.STORE_HASH}/${this.API_VERSION}${path}`;
    const headers = {
      'X-Auth-Token': this.ACCESS_TOKEN,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return new Promise((resolve, reject) => {
      const req = https.request(
        url,
        {
          method: 'POST',
          headers,
        },
        res => {
          let body: Buffer[] = [];

          console.log('Response Content Type', res.headers['content-type']);

          res.on('data', chunk => {
            body.push(chunk);
          });

          res.on('end', () => {
            return resolve(JSON.parse(body.join('')));
          });
        }
      );
      req.on('error', error => reject(error));
      req.write(jsonBody);
      req.end();
    });
  };

  put = async (path: string, body: {}) => {
    const jsonBody = JSON.stringify(body);
    const url = `https://api.bigcommerce.com/stores/${this.STORE_HASH}/${this.API_VERSION}${path}`;
    const headers = {
      'X-Auth-Token': this.ACCESS_TOKEN,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return new Promise((resolve, reject) => {
      const req = https.request(
        url,
        {
          method: 'PUT',
          headers,
        },
        res => {
          let body: Buffer[] = [];

          console.log('Response Content Type', res.headers['content-type']);

          res.on('data', chunk => {
            body.push(chunk);
          });

          res.on('end', () => {
            return resolve(JSON.parse(body.join('')));
          });
        }
      );
      req.on('error', error => reject(error));
      req.write(jsonBody);
      req.end();
    });
  };

  delete = async (path: string) => {
    const url = `https://api.bigcommerce.com/stores/${this.STORE_HASH}/${this.API_VERSION}${path}`;
    const headers = {
      'X-Auth-Token': this.ACCESS_TOKEN,
      Accept: 'application/json',
    };
    return new Promise((resolve, reject) => {
      const req = https.request(
        url,
        {
          method: 'DELETE',
          headers,
        },
        res => {
          let body: Buffer[] = [];

          console.log('Response Content Type', res.headers['content-type']);

          res.on('data', chunk => {
            body.push(chunk);
          });

          res.on('end', () => {
            // @todo no json to parse, just a 204 response
            return resolve(JSON.parse(body.join('')));
          });
        }
      );
      req.on('error', error => reject(error));
      req.end();
    });
  };
}
