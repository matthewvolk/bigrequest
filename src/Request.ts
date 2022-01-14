import https from 'https';
import { OutgoingHttpHeaders } from 'http2';

export type Method = 'GET' | 'DELETE' | 'POST' | 'PUT';
export type Headers = OutgoingHttpHeaders;

interface RequestConfig {
  url: string;
  method: Method;
  headers: Headers;
  body: object | null;
}

export default class Request {
  private method: Method;
  private url: string;
  private headers: Headers;
  private body: object | null;

  constructor(config: RequestConfig) {
    this.url = config.url;
    this.method = config.method;
    this.headers = config.headers;
    this.body = config.body;
  }

  run = () => {
    return new Promise((resolve, reject) => {
      const req = https.request(
        this.url,
        {
          method: this.method,
          headers: { ...this.headers },
        },
        (res) => {
          const body: Buffer[] = [];

          console.log('Response Content Type', res.headers['content-type']);

          if (res.statusCode === 429) {
            const error = new Error(`API Limit Reached`);
            return reject(error);
          }

          res.on('data', (chunk) => {
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
              return resolve({ body, status: res.statusCode });
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
      req.on('error', (error) => {
        return reject(error);
      });
      if (this.body) {
        req.write(JSON.stringify(this.body));
      }
      req.end();
    });
  };
}
