<p align="center">
<img src="BigReq.png">
</p>

# BigReq (pronounced "BigRequest")

BigReq is a **zero-dependency**, **Typescript based** Node.js HTTP Request client for the
BigCommerce API.

# Getting Started

First, install using `npm` or `yarn`:

```bash
npm i bigreq
```

```bash
yarn add bigreq
```

Then, import `BigReq` into your file and instantiate the class with your
[BigCommerce API Credentials](https://developer.bigcommerce.com/api-docs/getting-started/authentication/rest-api-authentication):

```javascript
import BigReq from 'bigreq';
// or
const BigReq = require('bigreq');

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

# API

## .get(path[, version])

- `path`: A valid [BigCommerce API endpoint](https://developer.bigcommerce.com/api-reference)
- `version` (optional): Either `"v2"` or `"v3"`. Default is `"v3"`.
- **Returns**: `Promise<unknown>`

**IMPORTANT:** For all paths, be sure to prepend the path with a forward slash, both when including
and not including the version. example, most BigCommerce API endpoints look similar to:
https://api.bigcommerce.com/stores/{STORE_HASH}/v3/customers

So, your `.get` path to the endpoint above would look like: `get("/customers")`

By default, BigReq uses the v3 API. If you need to switch between API versions, each API method
accepts a second parameter `version` which is a two character string of either `"v2"` or `"v3"`. For
example:

```js
// v3 Endpoint:
store.get('/orders/{order_id}/transactions').then(...);

// v2 Endpoint:
store.get('/orders', 'v2').then(...);
```

## .post(path, data[, version])

- `path`: A valid BigCommerce API endpoint, following the same format described above.
- `data`: A Javascript object or array that will be subsequently turned in JSON by the `.post`
  method. Be careful, some BigCommerce API endpoints require data to be sent as an array of objects
  such as the
  [Customer Attributes POST endpoint](https://developer.bigcommerce.com/api-reference/store-management/customers-v3/customer-attributes/customersattributespost).
  You'll want to pass that array of objects to the `data` parameter above.
- `version` (optional): Either `"v2"` or `"v3"`. Default is `"v3"`.
- **Returns**: `Promise<unknown>`

## .put(path, data[, version])

- `path`: A valid BigCommerce API endpoint, following the same format described above.
- `data`: A Javascript object or array that will be subsequently turned into JSON by the `.put`
  method.
- `version` (optional): Either `"v2"` or `"v3"`. Default is `"v3"`.
- **Returns**: `Promise<unknown>`

## .delete(path[, version])

- `path`: A valid BigCommerce API endpoint, following the same format described above.
- `version` (optional): Either `"v2"` or `"v3"`. Default is `"v3"`.
- **Returns**: `Promise<unknown>`

# Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md)
