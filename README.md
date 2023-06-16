<p align="center">
<img src="BigReq.png">
</p>

# BigReq ("BigRequest")

#### ✨ Inspired by our partners at Space48: [Space48/bigcommerce-api-js](https://github.com/Space48/bigcommerce-api-js)

_A Node.js module for authentication and communication with the BigCommerce API._

This module is available in two formats:

- **ES Module:** `dist/index.mjs`
- **CommonJS:** `dist/index.js`

## Requirements

- **Node.js:** `>=18`

## Installation

```sh
npm i bigreq
```

## Usage

```js
// CommonJS
const bigreq = require('bigreq');
```

```js
// ES Module
import bigreq from 'bigreq';
```

```ts
// Typescript (recommended)
import bigreq from 'bigreq';
```

### OAuth

```ts
const oauth = bigreq.oauth({
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

### REST Management API

```ts
const product = await bc.v3.get('/catalog/products/{product_id}', {
  params: {
    header: { Accept: 'application/json' },
    path: { product_id: 111 },
  },
});

/**
 * product: {
 *   data: {
 *     id?: number | undefined;
 *     name: string;
 *     type: "physical" | "digital";
 *     sku?: string | undefined;
 *     ...
 *   } | undefined;
 *   errors: {
 *     status?: number | undefined;
 *     title?: string | undefined;
 *     type?: string | undefined;
 *     instance?: string | undefined;
 *   } | undefined;
 *   response: Response;
 * }
 */
```

## Contributing

### Getting Started

_Ensure you are using Node.js v18 or higher._

**1. Clone the repo**

```sh
git clone git@github.com:matthewvolk/bigreq.git && cd bigreq
```

**2. Install dependencies**

```sh
npm i
```

**3. Generate types**

```sh
npm run generate
```

### Generating Types

If you run the `npm run generate` command above as-is, you'll likely see a rate limiting error returned from GitHub. For unauthenticated requests, GitHub's rate limit [currently allows for up to 60 requests per hour](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting).

However, user access token requests increase that limit to 5,000 requests per hour, per authenticated user. The `npm run generate` command accepts an access token as an argument:

1. [Create a GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) (for scopes, only "Public Repositories (read-only)" is required)
2. Re-run the `npm run generate` command:

```sh
npm run generate -- YOUR_ACCESS_TOKEN
```
