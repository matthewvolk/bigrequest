# bigrequest

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
