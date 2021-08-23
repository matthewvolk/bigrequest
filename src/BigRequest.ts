import https from 'https';

interface BigCommerceAPICredentials {
  ACCESS_TOKEN: string;
  STORE_HASH: string;
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  STORE_URL: string;
}

export default class BigRequest {
  private ACCESS_TOKEN: string;
  private STORE_HASH: string;
  private CLIENT_ID: string;
  private CLIENT_SECRET: string;
  private STORE_URL: string;

  constructor({
    ACCESS_TOKEN,
    STORE_HASH,
    CLIENT_ID,
    CLIENT_SECRET,
    STORE_URL,
  }: BigCommerceAPICredentials) {
    if (!ACCESS_TOKEN) throw new SyntaxError('ACCESS_TOKEN is a required parameter.');
    if (!STORE_HASH) throw new SyntaxError('STORE_HASH is a required parameter.');
    if (!CLIENT_ID) throw new SyntaxError('CLIENT_ID is a required parameter.');
    if (!CLIENT_SECRET) throw new SyntaxError('CLIENT_SECRET is a required parameter.');
    if (!STORE_URL) throw new SyntaxError('STORE_URL is a required parameter.');

    this.ACCESS_TOKEN = ACCESS_TOKEN;
    this.STORE_HASH = STORE_HASH;
    this.CLIENT_ID = CLIENT_ID;
    this.CLIENT_SECRET = CLIENT_SECRET;
    this.STORE_URL = STORE_URL;
  }

  request = async () => {
    return new Promise((resolve, reject) => {
      const req = https.get('https://jsonplaceholder.typicode.com/todos/1', response => {
        let body: Buffer[] = [];

        console.log('===== Response =====');
        console.log(response.headers);
        console.log('===== End Response =====');

        response.on('data', chunk => {
          body.push(chunk);
        });

        response.on('end', () => {
          return resolve(JSON.parse(body.join('')));
        });
      });

      req.on('error', e => reject(e));
    });
  };
}
