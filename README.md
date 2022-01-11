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
// const BigReq = require('bigreq');

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

## .get(path[, RequestConfig])

- `path`: A valid [BigCommerce API endpoint](https://developer.bigcommerce.com/api-reference). For
  all paths, be sure to prepend the path with a forward slash, both when including and not including
  the version. example, most BigCommerce API endpoints look similar to:
  https://api.bigcommerce.com/stores/{STORE_HASH}/v3/customers. So, your `.get` path to the endpoint
  above would look like: `get("/customers")`
- `RequestConfig` (optional): See [RequestConfig](#requestconfig)
- **Returns**: `Promise`

## .post(path[, RequestConfig])

- `path`: A valid BigCommerce API endpoint, following the same format described above.
- `RequestConfig` (optional): See [RequestConfig](#requestconfig)
- **Returns**: `Promise`

## .put(path[, RequestConfig])

- `path`: A valid BigCommerce API endpoint, following the same format described above.
- `RequestConfig` (optional): See [RequestConfig](#requestconfig)
- **Returns**: `Promise`

## .delete(path[, RequestConfig])

- `path`: A valid BigCommerce API endpoint, following the same format described above.
- `RequestConfig` (optional): See [RequestConfig](#requestconfig)
- **Returns**: `Promise`

## RequestConfig

The `RequestConfig` object can be passed to any of the request methods above as an optional
parameter. These are the aavailable configuration options for making requests:

```js
{
  // (Optional): Either 'v2' or 'v3'. Defaults to 'v3'.
  version: 'v3', // default

  // Custom headers to be sent with the request. By default,
  // X-Auth-Token is set automatically for each request.
  headers: {
    Accept: 'application/json', // default
    'Content-Type': 'application/json' // default
  },

  // Data to be sent as the request body
  body: {
    some_data: "Test"
  }
}
```

# Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md)
