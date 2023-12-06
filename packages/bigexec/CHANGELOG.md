# bigexec

## 0.0.18

### Patch Changes

- [#125](https://github.com/matthewvolk/bigrequest/pull/125) [`590f08d`](https://github.com/matthewvolk/bigrequest/commit/590f08dab911af33ade494864ee682f609bf0433) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Closes #123 - Swaps `jsonwebtoken` for `jose` in order to offer edge-compatibility when using the `oauth.verify` method.

- Updated dependencies [[`590f08d`](https://github.com/matthewvolk/bigrequest/commit/590f08dab911af33ade494864ee682f609bf0433)]:
  - bigrequest@0.0.17

## 0.0.17

### Patch Changes

- Updated dependencies [[`43ad6d0`](https://github.com/matthewvolk/bigrequest/commit/43ad6d00a3e3e552187da8da4c303ed76792b902)]:
  - bigrequest@0.0.16

## 0.0.16

### Patch Changes

- [#112](https://github.com/matthewvolk/bigrequest/pull/112) [`012c1e2`](https://github.com/matthewvolk/bigrequest/commit/012c1e2ecd4ce1dc3cf3ed19e535ca19f9440cc2) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Fixes issue with types not being bundled with the package correctly. Adds `cjsInterop` flag to maintain default export parity for commonjs. **NOTE: It is recommended to set `"esModuleInterop": true` in `tsconfig.json` if using this library in Typescript projects.**

- Updated dependencies [[`012c1e2`](https://github.com/matthewvolk/bigrequest/commit/012c1e2ecd4ce1dc3cf3ed19e535ca19f9440cc2)]:
  - bigrequest@0.0.15

## 0.0.15

### Patch Changes

- Updated dependencies [[`fd482d9`](https://github.com/matthewvolk/bigrequest/commit/fd482d9805690da4f1e0dfcd9715ca45eadd9c10)]:
  - bigrequest@0.0.14

## 0.0.14

### Patch Changes

- Updated dependencies [[`3a38c79`](https://github.com/matthewvolk/bigrequest/commit/3a38c7949c9b0211a91c51b01c6c96416216e53a)]:
  - bigrequest@0.0.13

## 0.0.13

### Patch Changes

- Updated dependencies [[`c15cea0`](https://github.com/matthewvolk/bigrequest/commit/c15cea0da6c606f63d72be8a74b970c7d3842b83)]:
  - bigrequest@0.0.12

## 0.0.12

### Patch Changes

- Updated dependencies [[`40275aa`](https://github.com/matthewvolk/bigrequest/commit/40275aaf45d26a24292ec27aab14f9a4b9cb57db)]:
  - bigrequest@0.0.11

## 0.0.11

### Patch Changes

- Updated dependencies [[`cd18cec`](https://github.com/matthewvolk/bigrequest/commit/cd18cecc0e6268114a134897e5e8013ab8cda237)]:
  - bigrequest@0.0.10

## 0.0.10

### Patch Changes

- Updated dependencies [[`e0ffd03`](https://github.com/matthewvolk/bigrequest/commit/e0ffd03e9d8a4c881e46147d0e679a8d2d6f5d97)]:
  - bigrequest@0.0.9

## 0.0.9

### Patch Changes

- [#22](https://github.com/matthewvolk/bigrequest/pull/22) [`926cac9`](https://github.com/matthewvolk/bigrequest/commit/926cac98b7ec2ea818d06d52548960d2586ae717) Thanks [@matthewvolk](https://github.com/matthewvolk)! - ⚠️ BREAKING: Updates `openapi-fetch` dependency to latest version (`0.7.1`). All REST methods are now UPPERCASE (`GET()`, `POST()`, etc.)

- Updated dependencies [[`926cac9`](https://github.com/matthewvolk/bigrequest/commit/926cac98b7ec2ea818d06d52548960d2586ae717)]:
  - bigrequest@0.0.8

## 0.0.8

### Patch Changes

- Updated dependencies [[`f7efea0`](https://github.com/matthewvolk/bigrequest/commit/f7efea0e8a36f38ec03fa38b2db9c293591f5059)]:
  - bigrequest@0.0.7

## 0.0.7

### Patch Changes

- Updated dependencies [[`b74cd30`](https://github.com/matthewvolk/bigrequest/commit/b74cd307bbf8e29c9d75f9ebe5fee063e3d70b25)]:
  - bigrequest@0.0.6

## 0.0.6

### Patch Changes

- [#16](https://github.com/matthewvolk/bigrequest/pull/16) [`aeeffa0`](https://github.com/matthewvolk/bigrequest/commit/aeeffa06a988e84bf169baaf69baa32d93fd678b) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Updates outdated dependencies, reconciles `@types/node` version to match minimum supported Node.js version, add `directory` property to `repository` field of `package.json` files

- Updated dependencies [[`aeeffa0`](https://github.com/matthewvolk/bigrequest/commit/aeeffa06a988e84bf169baaf69baa32d93fd678b)]:
  - bigrequest@0.0.5

## 0.0.5

### Patch Changes

- [#14](https://github.com/matthewvolk/bigrequest/pull/14) [`6f56f68`](https://github.com/matthewvolk/bigrequest/commit/6f56f680bc3b84b13f8caa0bcc4304b871cc8f2e) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Exclude unnecessary files from being published to npm for `bigexec`. Minor documentation changes for both `bigexec` and `bigrequest`

- Updated dependencies [[`6f56f68`](https://github.com/matthewvolk/bigrequest/commit/6f56f680bc3b84b13f8caa0bcc4304b871cc8f2e)]:
  - bigrequest@0.0.4

## 0.0.4

### Patch Changes

- [#12](https://github.com/matthewvolk/bigrequest/pull/12) [`343e4d9`](https://github.com/matthewvolk/bigrequest/commit/343e4d98fd2b18901eb09a0aa4e5c4b2ff26a50f) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Fixes `bigrequest` REST usage documentation, fixes contributing urls for all packages

- Updated dependencies [[`343e4d9`](https://github.com/matthewvolk/bigrequest/commit/343e4d98fd2b18901eb09a0aa4e5c4b2ff26a50f)]:
  - bigrequest@0.0.3

## 0.0.3

### Patch Changes

- [#10](https://github.com/matthewvolk/bigrequest/pull/10) [`2ef97ca`](https://github.com/matthewvolk/bigrequest/commit/2ef97cafcdafbea7ff794084243a79e2c8269ba4) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Updates documentation for all packages (including monorepo root) to reflect migration to monorepository

- Updated dependencies [[`2ef97ca`](https://github.com/matthewvolk/bigrequest/commit/2ef97cafcdafbea7ff794084243a79e2c8269ba4)]:
  - bigrequest@0.0.2

## 0.0.2

### Patch Changes

- [#8](https://github.com/matthewvolk/bigrequest/pull/8) [`569dd73`](https://github.com/matthewvolk/bigrequest/commit/569dd73f6c6cb9355c4ebb6af6617179e9f766cb) Thanks [@matthewvolk](https://github.com/matthewvolk)! - Migrate Next.js Commerce CLI to general Headless Storefront CLI

## 0.0.1

### Patch Changes

- [#6](https://github.com/matthewvolk/bigrequest/pull/6) [`b804afb`](https://github.com/matthewvolk/bigrequest/commit/b804afb70f037fd1fca26dde41cfa9b7a3dc4ed3) Thanks [@matthewvolk](https://github.com/matthewvolk)! - initial release

- Updated dependencies [[`b804afb`](https://github.com/matthewvolk/bigrequest/commit/b804afb70f037fd1fca26dde41cfa9b7a3dc4ed3)]:
  - bigrequest@0.0.1
