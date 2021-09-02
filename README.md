<p align="center">
<img src="BigReq.png">
</p>

# BigReq (pronounced "BigRequest")

BigReq is a **zero-dependency**, **Typescript based** Node.js HTTP Request client for the
BigCommerce API.

## Getting Started

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

## API

**.get(path)**

- `path`: A valid [BigCommerce API endpoint](https://developer.bigcommerce.com/api-reference)
- **Returns**: `Promise<unknown>`

**IMPORTANT:** For all paths, only include the path _after_ the `/v3` or `/v2` part of the URL. For
example, most BigCommerce API endpoints look similar to:
https://api.bigcommerce.com/stores/{STORE_HASH}/v3/customers

So, your `.get` path would look like: `get("/customers")`

By default, BigReq uses the v3 API. If you need to switch between API versions, simply run `.v2()`
or `.v3()` before the `get`/`post`/`put`/`delete` method. For example:

```javascript
// switch to v2
store.v2().get("/pages").then(...)

// switch back to v3
store.v3().get("/customers").then(...)
```

**.post(path[, data])**

- `path`: A valid BigCommerce API endpoint, following the same format described above.
- `data`: A Javascript object or array that will be subsequently turned in JSON by the `.post`
  method. Be careful, some BigCommerce API endpoints require data to be sent as an array of objects
  such as the
  [Customer Attributes POST endpoint](https://developer.bigcommerce.com/api-reference/store-management/customers-v3/customer-attributes/customersattributespost).
  You'll want to pass that array of objects to the `data` parameter above.
- **Returns**: `Promise<unknown>`

**.put(path[, data])**

- `path`: A valid BigCommerce API endpoint, following the same format described above.
- `data`: A Javascript object or array that will be subsequently turned into JSON by the `.put`
  method.
- **Returns**: `Promise<unknown>`

**.delete(path)**

- `path`: A valid BigCommerce API endpoint, following the same format described above.
- **Returns**: `Promise<unknown>`

## Contributing

1. `git clone git@github.com:matthewvolk/bigreq.git`
2. `cd bigreq`
3. `yarn watch` in one terminal
4. `yarn dev` in another terminal
