# BigRequest

A Node.js HTTP request client for the BigCommerce API. Includes OAuth2 authorization flows for Single-Click App developers.

## Overview

This module is available in two formats:

- **ES Module:** `dist/index.mjs`
- **CommonJS:** `dist/index.js`

## Requirements

- **Node.js:** `>=18`

## Installation

```sh
npm i bigrequest
```

## Usage

```ts
// Typescript
import bigrequest from 'bigrequest';
```

```js
// CommonJS
const bigrequest = require('bigrequest');
```

```js
// ES Module
import bigrequest from 'bigrequest';
```

### REST Management API

```ts
const bc = bigrequest.rest({
  storeHash: 'your_store_hash',
  accessToken: 'your_access_token',
});

// Use the REST client
const product = await bc.v3.GET('/catalog/products/{product_id}', {
  params: {
    header: { Accept: 'application/json' },
    path: { product_id: 111 },
  },
});

/**
 * product: {
 *   data:
 *     | {
 *         data: {
 *           id?: number | undefined;
 *           name: string;
 *           type: "physical" | "digital";
 *           sku?: string | undefined;
 *           ...
 *         };
 *         meta: {};
 *       }
 *     | undefined;
 *   errors:
 *     | {
 *         status?: number | undefined;
 *         title?: string | undefined;
 *         type?: string | undefined;
 *         instance?: string | undefined;
 *       }
 *     | undefined;
 *   response: Response;
 * }
 */

// Creating an image using FormData
const categoryImage = await bc.v3.POST('/catalog/categories/{category_id}/image', {
  params: {
    header: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
    path: { category_id: 11 },
  },
  body: {
    image_file: 'path/to/image.jpg',
  },
  bodySerializer(body) {
    const fd = new FormData();

    /**
     * body: {
     *   image_file: "path/to/image.jpg"
     * }
     */
    for (const [k, v] of Object.entries(body)) {
      const blob = new Blob([fs.readFileSync(v)]);

      fd.append(k, blob, 'DESIRED_FILE_NAME.jpg');
    }

    return fd;
  },
});
```

### OAuth

```ts
const oauth = bigrequest.oauth({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  authCallback: 'https://devtools.bigcommerce.com/my/apps',
});

// Receive the auth callback
const accessTokenResponse = await oauth.authorize({
  code: 'code',
  context: 'context',
  scope: 'scope',
});

/**
 * accessTokenResponse: {
 *   scope: string;
 *   context: string;
 *   access_token: string;
 *   user: {
 *     id: number;
 *     username: string;
 *     email: string;
 *   }
 *   account_uuid: string;
 * }
 */

// Receive the load/uninstall/remove_user callback
const signedJwtPayload = await oauth.verify('signed_payload_jwt');

/**
 * signedJwtPayload: {
 *   user: {
 *     id: number;
 *     email: string;
 *     locale: string;
 *   }
 *   aud: string;
 *   iss: string;
 *   iat: number;
 *   nbf: number;
 *   exp: number;
 *   jti: string;
 *   sub: string;
 *   owner: {
 *     id: number;
 *     email: string;
 *   }
 *   url: string;
 *   channel_id: number | null;
 * }
 */
```

## Contributing

See [matthewvolk/bigrequest/README.md](https://github.com/matthewvolk/bigrequest/tree/main#readme)
