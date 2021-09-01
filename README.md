<p align="center">
<img src="BigRequest.png">
</p>

# BigRequest

A Node.js based HTTP Request client for the BigCommerce API

## Getting Started

```javascript
import BigRequest from 'BigRequest';

const storeName = new BigRequest({
  ACCESS_TOKEN: 'YOUR API CLIENT ACCESS TOKEN',
  STORE_HASH: 'YOUR STORE HASH',
  CLIENT_ID: 'YOUR API CLIENT ID',
  CLIENT_SECRET: 'YOUR API CLIENT SECRET',
});

storeName
  .get('/catalog/products')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```
