# bigrequest

## 0.0.21

### Patch Changes

- [#158](https://github.com/matthewvolk/bigrequest/pull/158) [`4443b02`](https://github.com/matthewvolk/bigrequest/commit/4443b02802b133d6c641a7ca6da35adc2e5d9838) Thanks [@matthewvolk](https://github.com/matthewvolk)! - bigcommerce/docs#24, bigcommerce/docs#19, bigcommerce/docs#38, bigcommerce/docs#22, bigcommerce/docs#40, bigcommerce/docs#39

## 0.0.20

### Patch Changes

- [#150](https://github.com/matthewvolk/bigrequest/pull/150) [`3d73341`](https://github.com/matthewvolk/bigrequest/commit/3d73341d94ea78fb8c70f34aabcb3132b5dbce22) Thanks [@matthewvolk](https://github.com/matthewvolk)! - bigcommerce/api-specs#1535, bigcommerce/api-specs#1233, bigcommerce/api-specs#1241

## 0.0.19

### Patch Changes

- [#148](https://github.com/matthewvolk/bigrequest/pull/148) [`5a77979`](https://github.com/matthewvolk/bigrequest/commit/5a77979a11d99dce1ba5febe39289d543cf65b23) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Update miscellaneous dependencies. These updates should not impact library usage.

## 0.0.18

### Patch Changes

- [#141](https://github.com/matthewvolk/bigrequest/pull/141) [`30a7b45`](https://github.com/matthewvolk/bigrequest/commit/30a7b45baf8f9aaf6c1928ba56f17b7ef88927fa) Thanks [@matthewvolk](https://github.com/matthewvolk)! - bigcommerce/api-specs#1533, bigcommerce/api-specs#1534, bigcommerce/api-specs#1536, bigcommerce/api-specs#1537, bigcommerce/api-specs#1538, bigcommerce/api-specs#1539, bigcommerce/api-specs#1541, bigcommerce/api-specs#1542, bigcommerce/api-specs#1543

## 0.0.17

### Patch Changes

- [#125](https://github.com/matthewvolk/bigrequest/pull/125) [`590f08d`](https://github.com/matthewvolk/bigrequest/commit/590f08dab911af33ade494864ee682f609bf0433) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Closes #123 - Swaps `jsonwebtoken` for `jose` in order to offer edge-compatibility when using the `oauth.verify` method.

## 0.0.16

### Patch Changes

- [#122](https://github.com/matthewvolk/bigrequest/pull/122) [`43ad6d0`](https://github.com/matthewvolk/bigrequest/commit/43ad6d00a3e3e552187da8da4c303ed76792b902) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Adds `.html` to template strings for gift certificates (bigcommerce/api-specs#1529). Cart product option value identifiers can be either string or number (bigcommerce/api-specs#1528). Changes `options` to `option_selections` for cart API (bigcommerce/api-specs#1530). Remove the `X-Strict-Mode` header from the price list records upsert endpoint (bigcommerce/api-specs#1532).

## 0.0.15

### Patch Changes

- [#112](https://github.com/matthewvolk/bigrequest/pull/112) [`012c1e2`](https://github.com/matthewvolk/bigrequest/commit/012c1e2ecd4ce1dc3cf3ed19e535ca19f9440cc2) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Fixes issue with types not being bundled with the package correctly. Adds `cjsInterop` flag to maintain default export parity for commonjs. **NOTE: It is recommended to set `"esModuleInterop": true` in `tsconfig.json` if using this library in Typescript projects.**

## 0.0.14

### Patch Changes

- [#110](https://github.com/matthewvolk/bigrequest/pull/110) [`fd482d9`](https://github.com/matthewvolk/bigrequest/commit/fd482d9805690da4f1e0dfcd9715ca45eadd9c10) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Generate types to include changes from https://github.com/bigcommerce/api-specs/compare/01d775a..main

## 0.0.13

### Patch Changes

- [#48](https://github.com/matthewvolk/bigrequest/pull/48) [`3a38c79`](https://github.com/matthewvolk/bigrequest/commit/3a38c7949c9b0211a91c51b01c6c96416216e53a) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Remove duplicate `brand_id` param on brand metafield endpoints (bigcommerce/api-specs#1445). Add `gift_wrapping` property in V3 Cart line items response (bigcommerce/api-specs#1470). Add `sort` query parameter to Get All Categories endpoint (bigcommerce/api-specs#1465). Remove duplicate `category_id` and `metafield_id` path parameters in V3 Categories endpoints (bigcommerce/api-specs#1439). Add pagination properties to V2 GET Currencies response (bigcommerce/api-specs#1464). Remove duplicate `customer_id` path param on V3 Customer Consent endpoint (bigcommerce/api-specs#1441). Remove duplicate `modifier_id` path param on V3 Product Modifier endpoint (bigcommerce/api-specs#1448). Remove duplicate `option_id` path param from V3 Product Variant Option endpoint (bigcommerce/api-specs#1449). Remove duplicate variant `metafield_id` and `variant_id` params on V3 Product Variants endpoint (bigcommerce/api-specs#1447). Remove duplicate `image_id` path param from V3 Product Image endpoint (bigcommerce/api-specs#1434). Remove duplicate `video_id` path param from V3 Product Video endpoint (bigcommerce/api-specs#1454). Remove duplicate `complex_rule_id` path param from V3 Complex Rule endpoint (bigcommerce/api-specs#1440). Remove duplicate `custom_field_id` path param from V3 Custom Field endpoint (bigcommerce/api-specs#1442). Remove duplicate `bulk_pricing_rule_id` path param from Bulk Pricing Rules endpoint (bigcommerce/api-specs#1437). Remove duplicate `metafield_id` path param on Product Metafields endpoint (bigcommerce/api-specs#1446). Remove duplicate `review_id` path param on Product Reviews endpoint (bigcommerce/api-specs#1451). Remove duplicate `uuid` path param on Theme Configuration endpoint (bigcommerce/api-specs#1453).

## 0.0.12

### Patch Changes

- [#36](https://github.com/matthewvolk/bigrequest/pull/36) [`c15cea0`](https://github.com/matthewvolk/bigrequest/commit/c15cea0da6c606f63d72be8a74b970c7d3842b83) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Fixes response type of GET category products sort order to be an array of objects rather than a single object (bigcommerce/api-specs#1430). Expose new `discounted_total_inc_tax` property in the GET order product and GET order products response (bigcommerce/api-specs#1457).

## 0.0.11

### Patch Changes

- [#34](https://github.com/matthewvolk/bigrequest/pull/34) [`40275aa`](https://github.com/matthewvolk/bigrequest/commit/40275aaf45d26a24292ec27aab14f9a4b9cb57db) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Adds `generated_tracking_link` to V2 Order Shipments API

## 0.0.10

### Patch Changes

- [#30](https://github.com/matthewvolk/bigrequest/pull/30) [`cd18cec`](https://github.com/matthewvolk/bigrequest/commit/cd18cecc0e6268114a134897e5e8013ab8cda237) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Generate types against bigcommerce/api-specs@af3bd63

## 0.0.9

### Patch Changes

- [#24](https://github.com/matthewvolk/bigrequest/pull/24) [`e0ffd03`](https://github.com/matthewvolk/bigrequest/commit/e0ffd03e9d8a4c881e46147d0e679a8d2d6f5d97) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Improve error handling for errors thrown by API client

## 0.0.8

### Patch Changes

- [#22](https://github.com/matthewvolk/bigrequest/pull/22) [`926cac9`](https://github.com/matthewvolk/bigrequest/commit/926cac98b7ec2ea818d06d52548960d2586ae717) Thanks [@matthewvolk](https://github.com/matthewvolk)! - ⚠️ BREAKING: Updates `openapi-fetch` dependency to latest version (`0.7.1`). All REST methods are now UPPERCASE (`GET()`, `POST()`, etc.)

## 0.0.7

### Patch Changes

- [#20](https://github.com/matthewvolk/bigrequest/pull/20) [`f7efea0`](https://github.com/matthewvolk/bigrequest/commit/f7efea0e8a36f38ec03fa38b2db9c293591f5059) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Regenerates type definitions for BigCommerce API using latest `openapi-typescript` package version

## 0.0.6

### Patch Changes

- [#18](https://github.com/matthewvolk/bigrequest/pull/18) [`b74cd30`](https://github.com/matthewvolk/bigrequest/commit/b74cd307bbf8e29c9d75f9ebe5fee063e3d70b25) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Updates `openapi-typescript` dependency to latest version

## 0.0.5

### Patch Changes

- [#16](https://github.com/matthewvolk/bigrequest/pull/16) [`aeeffa0`](https://github.com/matthewvolk/bigrequest/commit/aeeffa06a988e84bf169baaf69baa32d93fd678b) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Updates outdated dependencies, reconciles `@types/node` version to match minimum supported Node.js version, add `directory` property to `repository` field of `package.json` files

## 0.0.4

### Patch Changes

- [#14](https://github.com/matthewvolk/bigrequest/pull/14) [`6f56f68`](https://github.com/matthewvolk/bigrequest/commit/6f56f680bc3b84b13f8caa0bcc4304b871cc8f2e) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Exclude unnecessary files from being published to npm for `bigexec`. Minor documentation changes for both `bigexec` and `bigrequest`

## 0.0.3

### Patch Changes

- [#12](https://github.com/matthewvolk/bigrequest/pull/12) [`343e4d9`](https://github.com/matthewvolk/bigrequest/commit/343e4d98fd2b18901eb09a0aa4e5c4b2ff26a50f) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Fixes `bigrequest` REST usage documentation, fixes contributing urls for all packages

## 0.0.2

### Patch Changes

- [#10](https://github.com/matthewvolk/bigrequest/pull/10) [`2ef97ca`](https://github.com/matthewvolk/bigrequest/commit/2ef97cafcdafbea7ff794084243a79e2c8269ba4) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Updates documentation for all packages (including monorepo root) to reflect migration to monorepository

## 0.0.1

### Patch Changes

- [#6](https://github.com/matthewvolk/bigrequest/pull/6) [`b804afb`](https://github.com/matthewvolk/bigrequest/commit/b804afb70f037fd1fca26dde41cfa9b7a3dc4ed3) Thanks [@matthewvolk](https://github.com/matthewvolk)! - initial release
