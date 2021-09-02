<p align="center">
<img src="BigReq.png">
</p>

# BigReq (pronounced "BigRequest")

BigReq is a Node.js based HTTP Request client for the BigCommerce API

## Getting Started

```javascript
import BigReq from 'BigReq';

const store = new BigReq({
  ACCESS_TOKEN: 'YOUR API CLIENT ACCESS TOKEN',
  STORE_HASH: 'YOUR STORE HASH',
  CLIENT_ID: 'YOUR API CLIENT ID',
  CLIENT_SECRET: 'YOUR API CLIENT SECRET',
});

store
  .get('/catalog/products')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

## API

**.get(path)**

**.post(path[, data])**

**.get(path[, data])**

**.delete(path)**

## Contributing

1. Clone this repository
2. `cd bigreq`
3. `yarn watch` in one terminal
4. `yarn dev` in another terminal
