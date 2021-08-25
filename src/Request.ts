import https from 'https';

class Request {
  run = (method: string, url: string, headers: {}) => {
    return new Promise((resolve, reject) => {
      const req = https.request(
        url,
        {
          method,
          headers,
        },
        res => {
          let body: Buffer[] = [];

          console.log('===== Response Headers =====');
          console.log(res.headers['content-type']);
          console.log('===== End Response Headers =====');

          // check res.headers for content-type

          // check pagination

          // implement pagination handler

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
}

export default Request;
