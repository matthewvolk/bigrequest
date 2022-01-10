import https from 'https';

interface BigCommerceAPICredentials {
  ACCESS_TOKEN: string;
  STORE_HASH: string;
  CLIENT_ID: string;
  CLIENT_SECRET: string;
}

export default class BigReq {
  private ACCESS_TOKEN: string;

  private STORE_HASH: string;

  private CLIENT_ID: string;

  private CLIENT_SECRET: string;

  constructor({ACCESS_TOKEN, STORE_HASH, CLIENT_ID, CLIENT_SECRET}: BigCommerceAPICredentials) {
    if (!ACCESS_TOKEN) throw new SyntaxError('ACCESS_TOKEN is a required parameter.');
    if (!STORE_HASH) throw new SyntaxError('STORE_HASH is a required parameter.');
    if (!CLIENT_ID) throw new SyntaxError('CLIENT_ID is a required parameter.');
    if (!CLIENT_SECRET) throw new SyntaxError('CLIENT_SECRET is a required parameter.');

    this.ACCESS_TOKEN = ACCESS_TOKEN;
    this.STORE_HASH = STORE_HASH;
    this.CLIENT_ID = CLIENT_ID;
    this.CLIENT_SECRET = CLIENT_SECRET;
  }

  get = async (path: string, version = 'v3') => {
    const url = `https://api.bigcommerce.com/stores/${this.STORE_HASH}/${version}${path}`;
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
      req.end();
    });
  };

  post = async (path: string, body: {}, version: string = 'v3') => {
    const jsonBody = JSON.stringify(body);
    const url = `https://api.bigcommerce.com/stores/${this.STORE_HASH}/${version}${path}`;
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
      req.write(jsonBody);
      req.end();
    });
  };

  put = async (path: string, body: {}, version: string = 'v3') => {
    const jsonBody = JSON.stringify(body);
    const url = `https://api.bigcommerce.com/stores/${this.STORE_HASH}/${version}${path}`;
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
      req.write(jsonBody);
      req.end();
    });
  };

  delete = async (path: string, version: string = 'v3') => {
    const url = `https://api.bigcommerce.com/stores/${this.STORE_HASH}/${version}${path}`;
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
      req.end();
    });
  };
}
